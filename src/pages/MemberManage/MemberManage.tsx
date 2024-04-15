import { HeaderTest } from "../pages";
import { MemberManagePanel } from "../../widgets/listPanels/MemberManagePanel/MemberManagePanel";
import { ConditionListModel, ApiCaller, Member } from "../../shared/shared";
import { useState, useEffect } from "react";
import style from "../pages.module.scss";
import { AutoMatch, IndividualMatch, ManualMatch, Find } from "../../features/features";

export function MemberManage() {
	const [manConditionData, setManConditionData] = useState(
		new ConditionListModel()
	);
    const [womanConditionData, setWomanConditionData] = useState(
		new ConditionListModel()
	);
	const [mans, setMans] = useState([]);
	const [womans, setWomans] = useState([]);
	
	useEffect(() => {
		ApiCaller.get("/members")
			.then((e) =>{
			console.log(e.data.content);
			console.log(typeof e.data.content[0].birthday);
			setMans(e.data.content?e.data.content.map((e:any) => new Member(e)):[]);
			})
	},[]);

	return (
		<>
		<HeaderTest />
		<div className={`container-fulid ${style.contentwrap}`}>
			<div className={`row ${style.positioning}`}>
				<div className={`col-5`}>
					<div className={`${style.contents}`}>
						<MemberManagePanel
							memberListProps={{members:mans}}
							conditionProps={{conditionData:manConditionData,setConditionData:setManConditionData}}
						/>
					</div>
				</div>
				<div className={`col-5`}>
					<div className={`${style.contents}`}>
						<MemberManagePanel
							memberListProps={{members:womans}}
							conditionProps={{conditionData:womanConditionData,setConditionData:setWomanConditionData}}
						/>
					</div>
				</div>
				<div className="col-1">
					<div className="p-3">
						<div className={`${style.buttonWrap}`}>
							<div className={`${style.buttonBox}`}>
								<AutoMatch />
							</div>
							<div className={`${style.buttonBox}`}>
								<IndividualMatch members={[]}/>
							</div>
							<div className={`${style.buttonBox}`}>
								<ManualMatch members={[]}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}
