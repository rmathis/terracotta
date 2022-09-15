package edu.iu.terracotta.service.app.impl;

import static org.mockito.Mockito.clearInvocations;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.dao.EmptyResultDataAccessException;

import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.anyString;

import edu.iu.terracotta.exceptions.AssessmentNotMatchingException;
import edu.iu.terracotta.exceptions.AssignmentNotEditedException;
import edu.iu.terracotta.exceptions.CanvasApiException;
import edu.iu.terracotta.exceptions.DataServiceException;
import edu.iu.terracotta.model.PlatformDeployment;
import edu.iu.terracotta.model.app.Assignment;
import edu.iu.terracotta.model.app.Experiment;
import edu.iu.terracotta.model.app.Exposure;
import edu.iu.terracotta.repository.AllRepositories;
import edu.iu.terracotta.repository.AssignmentRepository;
import edu.iu.terracotta.repository.SubmissionRepository;
import edu.iu.terracotta.service.canvas.CanvasAPIClient;

import javax.persistence.EntityManager;

import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import edu.iu.terracotta.exceptions.AssessmentNotMatchingException;
import edu.iu.terracotta.exceptions.AssignmentNotCreatedException;
import edu.iu.terracotta.exceptions.CanvasApiException;
import edu.iu.terracotta.exceptions.DataServiceException;
import edu.iu.terracotta.exceptions.IdInPostException;
import edu.iu.terracotta.exceptions.MultipleAttemptsSettingsValidationException;
import edu.iu.terracotta.exceptions.RevealResponsesSettingValidationException;
import edu.iu.terracotta.exceptions.TitleValidationException;
import edu.iu.terracotta.model.PlatformDeployment;
import edu.iu.terracotta.model.app.Assignment;
import edu.iu.terracotta.model.app.Exposure;
import edu.iu.terracotta.model.app.dto.AssignmentDto;
import edu.iu.terracotta.model.canvas.AssignmentExtended;
import edu.iu.terracotta.repository.AllRepositories;
import edu.iu.terracotta.repository.AssignmentRepository;
import edu.iu.terracotta.repository.PlatformDeploymentRepository;
import edu.iu.terracotta.repository.SubmissionRepository;
import edu.iu.terracotta.repository.TreatmentRepository;
import edu.iu.terracotta.service.canvas.CanvasAPIClient;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

public class AssignmentServiceImplTest {

    @InjectMocks
    private AssignmentServiceImpl assignmentService;

    @Mock
    private AllRepositories allRepositories;

    @Mock
    private AssignmentRepository assignmentRepository;

    @Mock
    private PlatformDeploymentRepository platformDeploymentRepository;

    @Mock
    private TreatmentRepository treatmentRepository;

    @Mock
    private EntityManager entityManager;

    @Mock
    private PlatformDeployment platformDeployment;

    @Mock
    private AssignmentExtended assignmentExtended;

    @Mock
    private SubmissionRepository submissionRepository;

    @Mock
    private CanvasAPIClient canvasAPIClient;

    @Mock
    private Exposure exposure;

    @Mock
    private Experiment experiment;

    private Assignment assignment;
    private Date dueDate = new Date();

    @BeforeEach
    public void beforeEach() throws DataServiceException, AssessmentNotMatchingException, CanvasApiException {
        MockitoAnnotations.openMocks(this);

        clearInvocations(assignmentRepository);
        allRepositories.assignmentRepository = assignmentRepository;
        allRepositories.platformDeploymentRepository = platformDeploymentRepository;
        allRepositories.submissionRepository = submissionRepository;
        allRepositories.treatmentRepository = treatmentRepository;

        assignment = new Assignment();
        assignment.setAssignmentId(1L);
        assignment.setLmsAssignmentId("1");
        assignment.setExposure(exposure);

        when(allRepositories.assignmentRepository.getOne(anyLong())).thenReturn(assignment);
        when(allRepositories.submissionRepository.countByAssessment_Treatment_Assignment_AssignmentId(anyLong())).thenReturn(0L);
        when(canvasAPIClient.listAssignment(anyString(), anyInt(), any(PlatformDeployment.class))).thenReturn(Optional.empty());
        when(exposure.getExperiment()).thenReturn(experiment);
        when(experiment.getPlatformDeployment()).thenReturn(new PlatformDeployment());
        when(allRepositories.assignmentRepository.findByAssignmentId(anyLong())).thenReturn(assignment);
        when(allRepositories.assignmentRepository.findByExposure_ExposureId(anyLong())).thenReturn(Collections.singletonList(newAssignment));
        when(allRepositories.assignmentRepository.save(any(Assignment.class))).thenReturn(newAssignment);
        when(allRepositories.platformDeploymentRepository.getOne(anyLong())).thenReturn(platformDeployment);
        when(allRepositories.treatmentRepository.findByAssignment_AssignmentId(anyLong())).thenReturn(Collections.emptyList());
        when(canvasAPIClient.listAssignment(anyString(), anyInt(), any(PlatformDeployment.class))).thenReturn(Optional.of(assignmentExtended));
        when(exposure.getExposureId()).thenReturn(1L);
        when(assignmentExtended.isPublished()).thenReturn(true);
        when(assignmentExtended.getDueAt()).thenReturn(dueDate);
    }

    @Test
    public void duplicateAssignmentTest() throws DataServiceException, IdInPostException, TitleValidationException, AssessmentNotMatchingException,
                                                AssignmentNotCreatedException, RevealResponsesSettingValidationException, MultipleAttemptsSettingsValidationException, NumberFormatException, CanvasApiException {
        AssignmentDto assignmentDto = assignmentService.duplicateAssignment(0L, "0", 0l);

        assertNotNull(assignmentDto);
        assertEquals(2L, assignmentDto.getAssignmentId());
        assertNull(assignment.getAssignmentId());
    }

    @Test
    public void testDuplicateAssessmentNotFound() throws IdInPostException, AssessmentNotMatchingException {
        when(allRepositories.assignmentRepository.findByAssignmentId(anyLong())).thenReturn(null);

        Exception exception = assertThrows(DataServiceException.class, () -> { assignmentService.duplicateAssignment(1L, "0", 0l); });

        assertEquals("The assignment with the given ID does not exist", exception.getMessage());
    }

    @Test
    public void testGetAssignments() throws AssessmentNotMatchingException, CanvasApiException {
        List<AssignmentDto> assignmentDtos = assignmentService.getAssignments(0L, "0", 0l, false);

        assertNotNull(assignmentDtos);
        assertEquals(1, assignmentDtos.size());
        assertTrue(assignmentDtos.get(0).isPublished());
        assertEquals(dueDate, assignmentDtos.get(0).getDueDate());
    }

    @Test
    public void testGetAssignmentsNoCanvasAssignmentFound() throws AssessmentNotMatchingException, CanvasApiException {
        when(canvasAPIClient.listAssignment(anyString(), anyInt(), any(PlatformDeployment.class))).thenReturn(Optional.empty());
        List<AssignmentDto> assignmentDtos = assignmentService.getAssignments(0L, "0", 0l, false);

        assertNotNull(assignmentDtos);
        assertEquals(1, assignmentDtos.size());
        assertFalse(assignmentDtos.get(0).isPublished());
        assertNull(assignmentDtos.get(0).getDueDate());
    }

    @Test
    public void testGetAssignmentsNoAssignmentsFound() throws AssessmentNotMatchingException, CanvasApiException {
        when(allRepositories.assignmentRepository.findByExposure_ExposureId(anyLong())).thenReturn(Collections.emptyList());
        List<AssignmentDto> assignmentDtos = assignmentService.getAssignments(0L, "0", 0l, false);

        assertNotNull(assignmentDtos);
        assertEquals(0, assignmentDtos.size());
    }

    @Test
    public void testDeleteAssignmentHard() throws EmptyResultDataAccessException, CanvasApiException, AssignmentNotEditedException {
        assignmentService.deleteById(1L, "canvasId");

        verify(allRepositories.assignmentRepository).deleteByAssignmentId(anyLong());
        verify(allRepositories.assignmentRepository, never()).saveAndFlush(any(Assignment.class));
    }

    @Test
    public void testDeleteAssignmentSoft() throws EmptyResultDataAccessException, CanvasApiException, AssignmentNotEditedException {
        when(allRepositories.submissionRepository.countByAssessment_Treatment_Assignment_AssignmentId(anyLong())).thenReturn(1L);

        assignmentService.deleteById(1L, "canvasId");

        verify(allRepositories.assignmentRepository, never()).deleteByAssignmentId(anyLong());
        verify(allRepositories.assignmentRepository).saveAndFlush(any(Assignment.class));
    }

}
