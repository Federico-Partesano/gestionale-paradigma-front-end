import { Search } from "react-feather";
import { Input } from "@doar/components";
import { StyledForm } from "./style";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setValueSearchHeader } from "../../../redux/slices/searchHeader";

const ContentSearch = () => {
    const dispatch = useAppDispatch();
    const { value } = useAppSelector(({ searchHeader }) => searchHeader);
    return (
        <StyledForm className="content-search">
            <Search strokeWidth="2.8px" size={20} />
            <Input
                type="text"
                id="post-search"
                name="post-serach"
                value={value}
                onChange={({
                    target: { value: valueInput },
                }: {
                    target: { value: string };
                }) => {
                    dispatch(setValueSearchHeader(valueInput));
                }}
                placeholder="Search..."
            />
        </StyledForm>
    );
};

export default ContentSearch;
