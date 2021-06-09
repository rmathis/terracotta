package edu.iu.terracotta.service.app.impl;

import edu.iu.terracotta.exceptions.DataServiceException;
import edu.iu.terracotta.model.app.Answer;
import edu.iu.terracotta.model.app.Question;
import edu.iu.terracotta.model.app.QuestionSubmission;
import edu.iu.terracotta.model.app.QuestionSubmissionComment;
import edu.iu.terracotta.model.app.Submission;
import edu.iu.terracotta.model.app.dto.QuestionSubmissionCommentDto;
import edu.iu.terracotta.model.app.dto.QuestionSubmissionDto;
import edu.iu.terracotta.repository.AllRepositories;
import edu.iu.terracotta.service.app.QuestionSubmissionCommentService;
import edu.iu.terracotta.service.app.QuestionSubmissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
public class QuestionSubmissionServiceImpl implements QuestionSubmissionService {

    @Autowired
    AllRepositories allRepositories;

    @Autowired
    QuestionSubmissionCommentService questionSubmissionCommentService;

    @Override
    public List<QuestionSubmission> findAllBySubmissionId(Long submissionId) {
        return allRepositories.questionSubmissionRepository.findBySubmission_SubmissionId(submissionId);
    }

    @Override
    public QuestionSubmissionDto toDto(QuestionSubmission questionSubmission, boolean questionSubmissionComments) {

        QuestionSubmissionDto questionSubmissionDto = new QuestionSubmissionDto();
        questionSubmissionDto.setQuestionSubmissionId(questionSubmission.getQuestionSubmissionId());
        questionSubmissionDto.setSubmissionId(questionSubmission.getSubmission().getSubmissionId());
        questionSubmissionDto.setQuestionId(questionSubmission.getQuestion().getQuestionId());
        questionSubmissionDto.setCalculatedPoints(questionSubmission.getCalculatedPoints());
        questionSubmissionDto.setAlteredGrade(questionSubmission.getAlteredGrade());
        if(questionSubmission.getAnswer() != null){
            questionSubmissionDto.setAnswerId(questionSubmission.getAnswer().getAnswerId());
        }
        List<QuestionSubmissionCommentDto> questionSubmissionCommentDtoList = new ArrayList<>();
        if(questionSubmissionComments){
            List<QuestionSubmissionComment> questionSubmissionCommentList =
                    allRepositories.questionSubmissionCommentRepository.findByQuestionSubmission_QuestionSubmissionId(questionSubmission.getQuestionSubmissionId());
            for(QuestionSubmissionComment questionSubmissionComment : questionSubmissionCommentList) {
                questionSubmissionCommentDtoList.add(questionSubmissionCommentService.toDto(questionSubmissionComment));
            }
        }
        questionSubmissionDto.setQuestionSubmissionCommentDtoList(questionSubmissionCommentDtoList);
        return questionSubmissionDto;
    }

    @Override
    public QuestionSubmission fromDto(QuestionSubmissionDto questionSubmissionDto) throws DataServiceException {

        QuestionSubmission questionSubmission = new QuestionSubmission();
        questionSubmission.setQuestionSubmissionId(questionSubmissionDto.getQuestionSubmissionId());
        questionSubmission.setCalculatedPoints(questionSubmissionDto.getCalculatedPoints());
        questionSubmission.setAlteredGrade(questionSubmissionDto.getAlteredGrade());
        Optional<Question> question = allRepositories.questionRepository.findById(questionSubmissionDto.getQuestionId());
        question.ifPresent(questionSubmission::setQuestion);
        if(questionSubmission.getAnswer() != null) {
            Optional<Answer> answer = allRepositories.answerRepository.findById(questionSubmissionDto.getAnswerId());
            if(answer.isPresent()){
                questionSubmission.setAnswer(answer.get());
            } else {
                throw new DataServiceException("The answer with the id provided does not exist for given question.");
            }
            answer.ifPresent(questionSubmission::setAnswer);
        }
        Optional<Submission> submission = allRepositories.submissionRepository.findById(questionSubmissionDto.getSubmissionId());
        if(submission.isPresent()){
            questionSubmission.setSubmission(submission.get());
        } else {
            throw new DataServiceException("The submission for the question submission does not exist.");
        }

        return questionSubmission;
    }

    @Override
    public QuestionSubmission save(QuestionSubmission questionSubmission) { return allRepositories.questionSubmissionRepository.save(questionSubmission); }

    @Override
    public Optional<QuestionSubmission> findById(Long id) { return allRepositories.questionSubmissionRepository.findById(id); }

    @Override
    public void saveAndFlush(QuestionSubmission questionSubmissionToChange) { allRepositories.questionSubmissionRepository.saveAndFlush(questionSubmissionToChange); }

    @Override
    @Transactional
    public void saveAllQuestionSubmissions(List<QuestionSubmission> questionSubmissionList) { allRepositories.questionSubmissionRepository.saveAll(questionSubmissionList); }

    @Override
    public void deleteById(Long id) { allRepositories.questionSubmissionRepository.deleteById(id); }

    @Override
    public boolean questionSubmissionBelongsToAssessmentAndSubmission(Long assessmentId, Long submissionId, Long questionSubmissionId) {
        return allRepositories.questionSubmissionRepository.existsBySubmission_Assessment_AssessmentIdAndSubmission_SubmissionIdAndQuestionSubmissionId(
                assessmentId, submissionId, questionSubmissionId);
    }

}
