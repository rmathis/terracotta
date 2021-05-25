package edu.iu.terracotta.model.app;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Table(name = "terr_assignment")
@Entity
public class Assignment {
    @Column(name = "assignment_id", nullable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long assignmentId;

    @JoinColumn(name = "exposure_exposure_id", nullable = false)
    @ManyToOne(optional = false)
    private Exposure exposure;

    @Column(name = "lms_assignment_id")
    private String lmsAssignmentId;

    @Column(name = "title")
    private String title;

    @Column(name = "assignment_order")
    private Integer assignmentOrder;


    //methods
    public Long getAssignmentId() { return assignmentId; }

    public void setAssignmentId(Long assignmentId) { this.assignmentId = assignmentId; }

    public Exposure getExposure() { return exposure; }

    public void setExposure(Exposure exposure) { this.exposure = exposure; }

    public String getLmsAssignmentId() { return lmsAssignmentId; }

    public void setLmsAssignmentId(String lmsAssignmentId) { this.lmsAssignmentId = lmsAssignmentId; }

    public String getTitle() { return title; }

    public void setTitle(String title) { this.title = title; }

    public Integer getAssignmentOrder() { return assignmentOrder; }

    public void setAssignmentOrder(Integer assignmentOrder) { this.assignmentOrder = assignmentOrder; }
}