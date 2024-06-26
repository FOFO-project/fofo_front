import { CommonHeader } from "../../widgets/widgets";
import { MemberManagePanel } from "../../widgets/widgets";
import {
	ConditionListModel,
	Member,
	Gender,
	ApprovalStatus,
} from "../../shared/shared";
import { useState } from "react";
import style from "./MemberManage.module.scss";
import page_styles from "../pages.module.scss";
import {
	AutoMatch,
	IndividualMatch,
	ManualMatch,
} from "../../features/features";

export function MemberManage() {
	const [manConditionData, setManConditionData] = useState(
		new ConditionListModel({
			gender: Gender.MAN,
			approvalStatus: ApprovalStatus.APPROVED,
		})
	);
	const [womanConditionData, setWomanConditionData] = useState(
		new ConditionListModel({
			gender: Gender.WOMAN,
			approvalStatus: ApprovalStatus.APPROVED,
		})
	);
	const [mans, setMans] = useState<Member[]>([]);
	const [womans, setWomans] = useState<Member[]>([]);

	const [manSelectedItems, setManSelectedItems] = useState<number[]>([]);
	const [womanSelectedItems, setWomanSelectedItems] = useState<number[]>([]);

	const pageType = "MemberManage";

	return (
		<div className={page_styles.Page}>
			<CommonHeader className={page_styles.Header} />
			<div className={page_styles.Panel}>
				<div className={style.container}>
					<div className={style.contentsContainer}>
						<div className={style.contents}>
							<MemberManagePanel
								memberListProps={{
									members: mans,
									setMembers: setMans,
								}}
								conditionProps={{
									conditionData: manConditionData,
									setConditionData: setManConditionData,
								}}
								selectedProps={{
									selectedItems: manSelectedItems,
									setSelectedItems: setManSelectedItems,
								}}
								title={"남자"}
								pageType={pageType}
							/>
						</div>
						<div className={style.contents}>
							<MemberManagePanel
								memberListProps={{
									members: womans,
									setMembers: setWomans,
								}}
								conditionProps={{
									conditionData: womanConditionData,
									setConditionData: setWomanConditionData,
								}}
								selectedProps={{
									selectedItems: womanSelectedItems,
									setSelectedItems: setWomanSelectedItems,
								}}
								title={"여자"}
								pageType={pageType}
							/>
						</div>
					</div>
					<div className={style.buttonContainer}>
						<AutoMatch />
						<IndividualMatch
							memberIds={[
								...manSelectedItems,
								...womanSelectedItems,
							]}
						/>
						<ManualMatch
							manIds={manSelectedItems}
							womanIds={womanSelectedItems}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
