package edu.iu.terracotta.model.app;

import edu.iu.terracotta.model.BaseEntity;

import javax.persistence.*;

@Table(name = "terr_exposure")
@Entity
public class Exposure extends BaseEntity {

    // ID
    @Column(name = "exposure_id", nullable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long exposureId;

    // Experiment ID
    @JoinColumn(name = "experiment_experiment_id", nullable = false)
    @ManyToOne(optional = false)
    private Experiment experiment;

    // Title
    @Column(name = "title")
    private String title;

    //methods
    public Long getExposureId() { return exposureId; }

    public void setExposureId(Long exposureId) { this.exposureId = exposureId; }

    public Experiment getExperiment() { return experiment; }

    public void setExperiment(Experiment experiment) { this.experiment = experiment; }

    public String getTitle() { return title; }

    public void setTitle(String title) { this.title = title; }
}