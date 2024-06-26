import { except, labelColumnsMap } from "../util/columns";
import style from "../MemberEdit.module.scss";
import { UpdateMemberRequestDto } from "../../../shared/shared";

interface FormInputProps {
	column: keyof UpdateMemberRequestDto;
	type?: string;
	getValue: (column: keyof UpdateMemberRequestDto) => string;
	onChange: (e: any) => void;
}
export function FormInput({
	column,
	type,
	getValue,
	onChange,
}: FormInputProps) {
	const mandatoryMark = (cols: string) => {
		return except.includes(cols) ? null : (
			<span className={style.mandatory_mark}>*</span>
		);
	};
	return (
		<div className="mb-3">
			{mandatoryMark(column)}
			<label htmlFor={column} className="form-label">
				{labelColumnsMap[column]}
			</label>
			<input
				type={type ? type : "text"}
				className="form-control"
				id={column}
				name={column}
				value={getValue(column)}
				onChange={onChange}
			/>
		</div>
	);
}
