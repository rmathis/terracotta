package edu.iu.terracotta.service.app.impl;

import edu.iu.terracotta.exceptions.AssignmentDatesException;
import edu.iu.terracotta.exceptions.CanvasApiException;
import edu.iu.terracotta.exceptions.ConnectionException;
import edu.iu.terracotta.exceptions.DataServiceException;
import edu.iu.terracotta.model.ags.Score;
import edu.iu.terracotta.model.app.AnswerMcSubmission;
import edu.iu.terracotta.model.app.Assessment;
import edu.iu.terracotta.model.app.Assignment;
import edu.iu.terracotta.model.app.Experiment;
import edu.iu.terracotta.model.app.Participant;
import edu.iu.terracotta.model.app.QuestionSubmission;
import edu.iu.terracotta.model.app.Submission;
import edu.iu.terracotta.model.app.SubmissionComment;
import edu.iu.terracotta.model.app.dto.QuestionSubmissionDto;
import edu.iu.terracotta.model.app.dto.SubmissionCommentDto;
import edu.iu.terracotta.model.app.dto.SubmissionDto;
import edu.iu.terracotta.model.oauth2.LTIToken;
import edu.iu.terracotta.model.oauth2.SecuredInfo;
import edu.iu.terracotta.repository.AllRepositories;
import edu.iu.terracotta.service.app.AnswerSubmissionService;
import edu.iu.terracotta.service.app.AssessmentService;
import edu.iu.terracotta.service.app.AssignmentService;
import edu.iu.terracotta.service.app.QuestionSubmissionService;
import edu.iu.terracotta.service.app.SubmissionCommentService;
import edu.iu.terracotta.service.app.SubmissionService;
import edu.iu.terracotta.service.canvas.CanvasAPIClient;
import edu.iu.terracotta.service.lti.AdvantageAGSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Component
public class SubmissionServiceImpl implements SubmissionService {

    @Value("${application.url}")
    private String localUrl;

    @Autowired
    AllRepositories allRepositories;

    @Autowired
    QuestionSubmissionService questionSubmissionService;

    @Autowired
    SubmissionCommentService submissionCommentService;

    @Autowired
    AssignmentService assignmentService;

    @Autowired
    AssessmentService assessmentService;

    @Autowired
    AnswerSubmissionService answerSubmissionService;

    @Autowired
    AdvantageAGSService advantageAGSService;

    @Autowired
    CanvasAPIClient canvasAPIClient;

    @Override
    public List<Submission> findAllByAssessmentId(Long assessmentId) {
        return allRepositories.submissionRepository.findByAssessment_AssessmentId(assessmentId);
    }

    @Override
    public SubmissionDto toDto(Submission submission, boolean questionSubmissions, boolean submissionComments) {

        SubmissionDto submissionDto = new SubmissionDto();
        submissionDto.setSubmissionId(submission.getSubmissionId());
        submissionDto.setParticipantId(submission.getParticipant().getParticipantId());
        submissionDto.setAssessmentId(submission.getAssessment().getAssessmentId());
        submissionDto.setConditionId(submission.getAssessment().getTreatment().getCondition().getConditionId());
        submissionDto.setTreatmentId(submission.getAssessment().getTreatment().getTreatmentId());
        submissionDto.setExperimentId(submission.getAssessment().getTreatment().getCondition().getExperiment().getExperimentId());
        submissionDto.setCalculatedGrade(submission.getCalculatedGrade());
        submissionDto.setAlteredCalculatedGrade(submission.getAlteredCalculatedGrade());
        submissionDto.setTotalAlteredGrade(submission.getTotalAlteredGrade());
        submissionDto.setDateSubmitted(submission.getDateSubmitted());
        submissionDto.setLateSubmission(submission.getLateSubmission());
        List<QuestionSubmissionDto> questionSubmissionDtoList = new ArrayList<>();
        if(questionSubmissions) {
            List<QuestionSubmission> questionSubmissionList = allRepositories.questionSubmissionRepository.findBySubmission_SubmissionId(submission.getSubmissionId());
            for(QuestionSubmission questionSubmission : questionSubmissionList) {
                questionSubmissionDtoList.add(questionSubmissionService.toDto(questionSubmission, false));
            }
        }
        submissionDto.setQuestionSubmissionDtoList(questionSubmissionDtoList);
        List<SubmissionCommentDto> submissionCommentDtoList = new ArrayList<>();
        if(submissionComments) {
            List<SubmissionComment> submissionCommentList = allRepositories.submissionCommentRepository.findBySubmission_SubmissionId(submission.getSubmissionId());
            for(SubmissionComment submissionComment : submissionCommentList) {
                submissionCommentDtoList.add(submissionCommentService.toDto(submissionComment));
            }
        }
        submissionDto.setSubmissionCommentDtoList(submissionCommentDtoList);
        String path = localUrl +
                "/api/experiments/" +
                submission.getAssessment().getTreatment().getCondition().getExperiment().getExperimentId() +
                "/conditions/" +
                submission.getAssessment().getTreatment().getCondition().getConditionId() +
                "/treatments/" +
                submission.getAssessment().getTreatment().getTreatmentId() +
                "/assessments/" +
                submission.getAssessment().getAssessmentId();
        submissionDto.setAssessmentLink(path);
        return submissionDto;
    }

    @Override
    public Submission fromDto(SubmissionDto submissionDto) throws DataServiceException {

        Submission submission = new Submission();
        submission.setSubmissionId(submissionDto.getSubmissionId());
        submission.setCalculatedGrade(submissionDto.getCalculatedGrade());
        submission.setAlteredCalculatedGrade(submissionDto.getAlteredCalculatedGrade());
        submission.setTotalAlteredGrade(submissionDto.getTotalAlteredGrade());
        submission.setDateSubmitted(submissionDto.getDateSubmitted());
        submission.setLateSubmission(submissionDto.getLateSubmission());
        Optional<Participant> participant = allRepositories.participantRepository.findById(submissionDto.getParticipantId());
        if(participant.isPresent()){
            submission.setParticipant(participant.get());
        } else{
            throw new DataServiceException("The participant for the submission does not exist.");
        }
        Optional<Assessment> assessment = allRepositories.assessmentRepository.findById(submissionDto.getAssessmentId());
        if(assessment.isPresent()) {
            submission.setAssessment(assessment.get());
        } else {
            throw new DataServiceException("The assessment for the submission does not exist.");
        }

        return submission;
    }

    @Override
    public Submission save(Submission submission) { return allRepositories.submissionRepository.save(submission); }

    @Override
    public Optional<Submission> findById(Long id) { return allRepositories.submissionRepository.findById(id); }

    @Override
    public List<Submission> findByParticipantId(Long participantId) { return allRepositories.submissionRepository.findByParticipant_ParticipantId(participantId); }

    @Override
    public Optional<Submission> findByParticipantIdAndSubmissionId(Long participantId, Long submissionId) {
        return allRepositories.submissionRepository.findByParticipant_ParticipantIdAndSubmissionId(participantId, submissionId);
    }

    @Override
    public List<Submission> findByParticipantIdAndAssessmentId(Long participantId, Long assessmentId) {
        return allRepositories.submissionRepository.findByParticipant_ParticipantIdAndAssessment_AssessmentId(participantId, assessmentId);
    }

    @Override
    public Participant findByExperiment_ExperimentIdAndLtiUserEntity_UserKey(Long experimentId, String userId) {
        return allRepositories.participantRepository.findByExperiment_ExperimentIdAndLtiUserEntity_UserKey(experimentId, userId);
    }

    @Override
    public void saveAndFlush(Submission submissionToChange) { allRepositories.submissionRepository.saveAndFlush(submissionToChange); }

    @Override
    public void deleteById(Long id) throws EmptyResultDataAccessException {
        allRepositories.submissionRepository.deleteBySubmissionId(id);
    }

    @Override
    public boolean submissionBelongsToAssessment(Long assessmentId, Long submissionId) {
        return allRepositories.submissionRepository.existsByAssessment_AssessmentIdAndSubmissionId(assessmentId, submissionId);
    }

    @Override
    @Transactional
    public void finalizeAndGrade(Long submissionId, SecuredInfo securedInfo) throws DataServiceException, CanvasApiException, IOException, AssignmentDatesException {
        Optional<Submission> submissionOptional =  allRepositories.submissionRepository.findById(submissionId);
        if (submissionOptional.isPresent()){
            //We are not changing the submission date once it is set.
            //^^^ maybe if we are allowing resubmissions we should allow this to change?
            if (submissionOptional.get().getDateSubmitted()==null) {
                if (securedInfo.getDueAt() != null && submissionOptional.get().getUpdatedAt().after(securedInfo.getDueAt())){
                    submissionOptional.get().setLateSubmission(true);
                }
                    submissionOptional.get().setDateSubmitted(submissionOptional.get().getUpdatedAt());
            }
            if (securedInfo.getLockAt() == null || submissionOptional.get().getUpdatedAt().after(securedInfo.getLockAt())) {
                saveAndFlush(gradeSubmission(submissionOptional.get()));
            } else {
                throw new AssignmentDatesException("Canvas Assignment is locked, we can not generate a submission with a date later than the lock date");
            }
        } else {
            throw new DataServiceException("Submission not found");
        }
    }

    @Override
    public boolean datesAllowed(Long experimentId, Long treatmentId, SecuredInfo securedInfo) {

        if (securedInfo.getUnlockAt()== null || securedInfo.getUnlockAt().before(new Date())){
            return securedInfo.getLockAt() == null || securedInfo.getLockAt().after(new Date());
        } else {
            return false;
        }
    }

    @Override
    public Submission createNewSubmission(Assessment assessment, Participant participant, SecuredInfo securedInfo) {
        Submission submission = new Submission();
        submission.setAssessment(assessment);
        submission.setParticipant(participant);
        submission = save(submission);
        return submission;
    }

    @Override
    @Transactional
    public void grade(Long submissionId, SecuredInfo securedInfo) throws DataServiceException {
        Optional<Submission> submissionOptional =  allRepositories.submissionRepository.findById(submissionId);
        if (submissionOptional.isPresent()){
            saveAndFlush(gradeSubmission(submissionOptional.get()));
        } else {
            throw new DataServiceException("Submission not found");
        }
    }


    @Override
    public Submission gradeSubmission(Submission submission) throws DataServiceException{
        //We need to calculate the 2 the possible grades. Automatic and manual
        float automatic = Float.parseFloat("0");
        float manual = Float.parseFloat("0");
        for (QuestionSubmission questionSubmission:submission.getQuestionSubmissions()) {
            //We need to grade the question first automatically it it was not graded before.
            //If multiple choice, we take the automatic score for automatic and the manual if any for manual, and if no manual, then the automatic for manual
            QuestionSubmission questionGraded = new QuestionSubmission();
            switch(questionSubmission.getQuestion().getQuestionType()){
                case MC:
                    List<AnswerMcSubmission> answerMcSubmissions = answerSubmissionService.findByQuestionSubmissionIdMC(questionSubmission.getQuestionSubmissionId());
                    if(answerMcSubmissions.size() == 1){
                        questionGraded = questionSubmissionService.automaticGradingMC(questionSubmission, answerMcSubmissions.get(0));
                    } else if (answerMcSubmissions.size() > 1){
                        throw new DataServiceException("Cannot have more than one answer submission for a multiple choice question.");
                    } else {
                        questionGraded.setCalculatedPoints(Float.valueOf("0"));
                    }
                break;
                case ESSAY:
                    questionGraded = questionSubmission;
                    questionGraded.setCalculatedPoints(Float.valueOf("0"));
                break;

            }
            automatic = automatic + questionGraded.getCalculatedPoints();
            if (questionGraded.getAlteredGrade()!=null && !questionGraded.getAlteredGrade().isNaN()) {
                manual = manual + questionSubmission.getAlteredGrade();
            } else {
                manual = manual + questionSubmission.getCalculatedPoints();
            }
            //TODO: If open question, we take the manual score for both, because the automatic will be always 0
        }
        submission.setCalculatedGrade(automatic);
        submission.setAlteredCalculatedGrade(manual);
        submission.setTotalAlteredGrade(manual);
        return submission;
    }

    @Override
    public void sendSubmissionGradeToCanvas(Submission submission) throws ConnectionException, DataServiceException {
        //We need, the assignment, and the iss configuration...
        Assignment assignment = submission.getAssessment().getTreatment().getAssignment();
        Experiment experiment = assignment.getExposure().getExperiment();
        LTIToken ltiTokenScore = advantageAGSService.getToken("scores", experiment.getPlatformDeployment());
        LTIToken ltiTokenResults = advantageAGSService.getToken("results", experiment.getPlatformDeployment());
        //find the right id to pass based on the assignment
        String lineitemId = assignmentService.lineItemId(assignment);
        if (lineitemId==null){
            throw new DataServiceException("The assignment is not linked to any Canvas assignment");
        }
        Score score = new Score();
        score.setUserId(submission.getParticipant().getLtiUserEntity().getUserKey());
        if (submission.getTotalAlteredGrade()!=null) {
            score.setScoreGiven(submission.getTotalAlteredGrade().toString());
        } else {
            score.setScoreGiven(submission.getAlteredCalculatedGrade().toString());
        }
        score.setScoreMaximum(assessmentService.calculateMaxScore(submission.getAssessment()).toString());
        score.setActivityProgress("Completed");
        score.setGradingProgress("FullyGraded");
        //TODO, check if this value is ok
        score.setTimestamp("2021-06-10T18:54:36.736+00:00");
        advantageAGSService.postScore(ltiTokenScore, ltiTokenResults, experiment.getLtiContextEntity(), lineitemId, score);


    }
}
