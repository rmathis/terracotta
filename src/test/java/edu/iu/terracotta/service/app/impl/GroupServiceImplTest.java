package edu.iu.terracotta.service.app.impl;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import edu.iu.terracotta.exceptions.AssignmentNotMatchingException;
import edu.iu.terracotta.exceptions.GroupNotMatchingException;
import edu.iu.terracotta.model.app.Assignment;
import edu.iu.terracotta.model.app.Exposure;
import edu.iu.terracotta.model.app.ExposureGroupCondition;
import edu.iu.terracotta.model.app.Group;
import edu.iu.terracotta.repository.AllRepositories;
import edu.iu.terracotta.repository.AssignmentRepository;
import edu.iu.terracotta.repository.ExposureGroupConditionRepository;
import edu.iu.terracotta.utils.TextConstants;

public class GroupServiceImplTest {

    @InjectMocks
    private GroupServiceImpl groupService;

    @Mock private AllRepositories allRepositories;
    @Mock private AssignmentRepository assignmentRepository;
    @Mock private ExposureGroupConditionRepository exposureGroupConditionRepository;

    @Mock private Assignment assignment;
    @Mock private Exposure exposure;
    @Mock private ExposureGroupCondition exposureGroupCondition;
    @Mock private Group group;

    @BeforeEach
    public void beforeEach() {
        MockitoAnnotations.openMocks(this);

        allRepositories.assignmentRepository = assignmentRepository;
        allRepositories.exposureGroupConditionRepository = exposureGroupConditionRepository;

        when(assignmentRepository.findByExposure_Experiment_ExperimentIdAndLmsAssignmentId(anyLong(), anyString())).thenReturn(assignment);
        when(exposureGroupConditionRepository.getByCondition_ConditionIdAndExposure_ExposureId(anyLong(), anyLong())).thenReturn(Optional.of(exposureGroupCondition));
        when(assignment.getExposure()).thenReturn(exposure);
        when(exposure.getExposureId()).thenReturn(1L);
        when(exposureGroupCondition.getGroup()).thenReturn(group);
    }

    @Test
    public void testgetUniqueGroupByConditionId() throws GroupNotMatchingException, AssignmentNotMatchingException {
        Group group = groupService.getUniqueGroupByConditionId(1L, "1", 1l);

        assertNotNull(group);
    }

    @Test
    public void testgetUniqueGroupByConditionIdNoAssignment() {
        when(assignmentRepository.findByExposure_Experiment_ExperimentIdAndLmsAssignmentId(anyLong(), anyString())).thenReturn(null);

        Exception exception = assertThrows(AssignmentNotMatchingException.class, () -> { groupService.getUniqueGroupByConditionId(1L, "1", 1l); });

        assertEquals(TextConstants.ASSIGNMENT_NOT_MATCHING, exception.getMessage());
    }

    @Test
    public void testgetUniqueGroupByConditionIdNoExposureGroup() {
        when(exposureGroupConditionRepository.getByCondition_ConditionIdAndExposure_ExposureId(anyLong(), anyLong())).thenReturn(Optional.empty());

        Exception exception = assertThrows(GroupNotMatchingException.class, () -> { groupService.getUniqueGroupByConditionId(1L, "1", 1l); });

        assertEquals("Error 130: This assignment does not have a condition assigned for the participant group.", exception.getMessage());
    }

}
