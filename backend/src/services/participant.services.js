import { errorHelper } from "../helpers/error.helper.js";
import { participantRepository } from "../repositories/participant.repository.js";

function isTestingEnvironment() {
  return process.env.NODE_ENV === "test";
}

async function getTotalParticipation() {
  const sum = await participantRepository.sumTotal();

  return sum[0]?.total || 0;
}

async function validateParticipationQuantity({ participation, minus = 0 }) {
  const totalParticipation = await getTotalParticipation();
  const participantionSum = totalParticipation + participation - minus;

  if (participantionSum > 100) {
    throw errorHelper.badRequest(`Participation exceeded by ${participantionSum - 100}!`);
  }
}

async function upsert(data) {
  const participant = { ...data, updatedAt: new Date() };
  const existingParticipant = await participantRepository.findByCredentials(
    participant.firstname,
    participant.lastname,
  );

  await validateParticipationQuantity({
    participation: participant.participation,
    minus: existingParticipant?.participation || 0,
  });

  if (!existingParticipant) participant.createdAt = new Date();

  const result = await participantRepository.upsert(participant, existingParticipant || participant);

  if (!result.ok) {
    throw errorHelper.server("An error occurred while saving the participant!");
  }

  return { data: result.value, updated: result.lastErrorObject.updatedExisting };
}

function list() {
  return participantRepository.findAll();
}

async function deleteById(id) {
  const participant = await participantRepository.findById(id);

  if (!participant) throw errorHelper.notFound("Participant not found!");

  const result = await participantRepository.deleteById(participant._id);

  if (result.deletedCount < 1) {
    throw errorHelper.server("An error occurred while deleting the participant!");
  }
}

const participantService = { upsert, list, deleteById };
const participantServiceForTesting = !isTestingEnvironment
  ? {}
  : { ...participantService, getTotalParticipation, validateParticipationQuantity };

export { participantService, participantServiceForTesting };
