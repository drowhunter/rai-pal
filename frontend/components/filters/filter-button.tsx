import { FilterOption } from "@components/table/table-head";
import { Button } from "@mantine/core";
import { IconSquare, IconSquareCheck } from "@tabler/icons-react";
import { useCallback } from "react";
import { UnknownFilterOption } from "./filter-select";

type Props<TFilterOption extends string> = {
	readonly isHidden: boolean;
	readonly onClick: (value: TFilterOption | null) => void;
	readonly filterOption: UnknownFilterOption | FilterOption<TFilterOption>;
};

export function FilterButton<TFilterOption extends string>(
	props: Props<TFilterOption>,
) {
	const handleClick = useCallback(() => {
		props.onClick(props.filterOption.value);
	}, [props]);

	return (
		<Button
			fullWidth
			variant={props.isHidden ? "light" : "filled"}
			key={props.filterOption.value}
			justify="start"
			leftSection={props.isHidden ? <IconSquare /> : <IconSquareCheck />}
			onClick={handleClick}
		>
			{props.filterOption.label || props.filterOption.value}
		</Button>
	);
}
