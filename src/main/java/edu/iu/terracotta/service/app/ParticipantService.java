package edu.iu.terracotta.service.app;

import edu.iu.terracotta.exceptions.DataServiceException;
import edu.iu.terracotta.model.app.Participant;
import edu.iu.terracotta.model.app.dto.ParticipantDto;
import edu.iu.terracotta.model.oauth2.SecurityInfo;

import java.util.List;
import java.util.Optional;

public interface ParticipantService {
    List<Participant> findAllByExperimentId(long experimentId);

    ParticipantDto toDto(Participant participant);

    Optional<Participant> findById(Long id);

    Participant fromDto(ParticipantDto participantDto) throws DataServiceException;

    void saveAndFlush(Participant participantToChange);

    Participant save(Participant participant);

    void deleteById(Long id);

    List<Participant> refreshParticipants(long experimentId, SecurityInfo securityInfo, List<Participant> currentParticipantList);

    boolean participantBelongsToExperiment(Long experimentId, Long participantId);
}
