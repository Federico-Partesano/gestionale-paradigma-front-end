import { useEffect, useLayoutEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { Input } from "@doar/components";
import { StyledDatePicker } from "./style";
import Calendar from "../calendar";

interface IProps {
    name: string;
    id: string;
    placeholder?: string;
    getDate: (name: string, date: string) => void;
    currentDate?: Date;
    formatDate?: string;
    formatLabelDate?: string;
}

const DatePicker = ({
    name,
    id,
    placeholder,
    getDate,
    formatDate,
    formatLabelDate,
    currentDate,
}: IProps) => {
    const [value, setValue] = useState<Date | Date[] | undefined>(currentDate);
    const [show, setShow] = useState(false);
    const calendarRef = useRef<HTMLDivElement>(null);

    const dateChangeHandler = (date: Date | Date[]) => {
        const d: string = dayjs(date.toString()).format(formatDate || "ll");
        setValue(date);
        getDate(name, d);
    };

    useEffect(() => {
        setValue(currentDate);
    }, [currentDate]);

    useLayoutEffect(() => {
        if (!calendarRef.current) return;
        const modalContent = document
            .getElementsByClassName("modal-content")
            .item(0);
        if (!modalContent) return;
        modalContent.addEventListener("click", (e) => {
            // eslint-disable-next-line
            if (!calendarRef.current!.contains(e.target as Node))
                setShow(false);
        });
        return () => {
            modalContent.removeEventListener("click", () => {});
        };
    }, []);

    const inputChangeHandler = () => {
        setValue(value);
    };

    const inputClickHandler = () => {
        setShow(true);
    };

    return (
        <StyledDatePicker $show={show}>
            <Input
                name={name}
                id={id}
                placeholder={placeholder}
                value={
                    value
                        ? dayjs(value.toString()).format(
                              formatLabelDate || "ll"
                          )
                        : undefined
                }
                onChange={inputChangeHandler}
                onClick={inputClickHandler}
            />
            <Calendar
                calendarRef={calendarRef}
                value={value}
                onChange={dateChangeHandler}
            />
        </StyledDatePicker>
    );
};

export default DatePicker;
