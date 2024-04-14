import { Address, AgeRelationType, Mbti, Religion, SmokingYn } from "../../shared";

export class Filtering {
	AgeRelation: AgeRelationType | null = null;
	SmokingYn: SmokingYn | null = null;
	Religion: Religion | null = null;
}
export class ConditionListModel {
	birthday: Date | null = null;
	address: Address = new Address();
	company: string | null = null;
	job: string | null = null;
	university: string | null = null;
	mbti: Mbti | null = null;
	smoking_yn: SmokingYn | null = null;
	religion: Religion | null = null;
	filtering_condition: Filtering = new Filtering();
	charming_point: string | null = null;

	constructor() {}
}
