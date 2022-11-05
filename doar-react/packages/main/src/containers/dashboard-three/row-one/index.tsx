import {
    Button,
    Card,
    Col,
    DropdownItem,
    DropdownToggle,
    SectionTitle,
    Spinner,
} from "@doar/components";
import {
    StyledHeader,
    StyledNavIcon,
    StyledNavLink,
    StyledDropdown,
    StyledHeaderRight,
} from "./style";
import { useSkills } from "../../../hooks/useSkills";
import {
    Dispatch,
    FC,
    SetStateAction,
    useEffect,
    useState,
    MouseEvent,
    Fragment,
    useMemo,
    ReactNode,
    useRef,
} from "react";
import { Edit, MoreVertical, Slash } from "react-feather";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { Skill } from "../../../models/Skills";
import "./index.scss";
import Pagination from "../../../components/Pagination/Pagination";
import ModalAddNewSkill from "./ModalAddNewSkill";
import { useEndpoints } from "../../../hooks/useEndpoints";
import { useAppDispatch } from "../../../redux/hooks";
import { setValueSkills } from "../../../redux/slices/skills";
const RowOne = () => {
    const { deleteSkill, getSkills } = useEndpoints();
    const { skills, loading, fetchSkills, setPagination } = useSkills();
    const [show, setShow] = useState(false);
    const dispatch = useAppDispatch();
    const [selectedSkill, setSelectedSkill] = useState<Skill>();
    useEffect(() => {
        // eslint-disable-next-line
        fetchSkills();
    }, []);
    useEffect(() => {
        console.log("skills", skills);
    }, [skills]);

    const refTable = useRef<HTMLTableElement>(null);

    const columnHelper = createColumnHelper<Skill & { action: any }>();

    useEffect(() => {
        setShow(Boolean(selectedSkill));
    }, [selectedSkill]);

    const columns = useMemo(
        () => [
            columnHelper.accessor("value", {
                id: "Value",
                cell: (info) => (
                    <p className="table-field-name">{info.getValue()}</p>
                ),
                header: () => <span className="ps-1">Skill</span>,
                footer: (info) => info.column.id,
            }),
            columnHelper.accessor("action", {
                header: () => (
                    <p className="header-title-actions text-end pe-2">
                        Actions
                    </p>
                ),
                // eslint-disable-next-line
                cell: (info) => info.renderValue(),
                footer: (info) => info.column.id,
            }),
        ],
        // eslint-disable-next-line
        [skills]
    );

    const handleDeleteSkill = async (_id: string) => {
        try {
            await deleteSkill(_id);
            await fetchSkills();
            const { data } = await getSkills();
            dispatch(setValueSkills(data));
        } catch (error) {
            console.error("error", error);
        }
    };

    const data = useMemo(
        () =>
            skills
                ? skills.docs.map((skill) => ({
                      ...skill,
                      action: (
                          <Fragment key={skill._id}>
                              <StyledNavIcon>
                                  <StyledNavLink
                                      href="#"
                                      onClick={(e: any) => {
                                          e.preventDefault();
                                      }}
                                      display={["none", "block"]}
                                  >
                                      <Edit
                                          color="green"
                                          size="24"
                                          onClick={() => {
                                              setSelectedSkill(skill);
                                          }}
                                      />
                                  </StyledNavLink>
                                  <StyledNavLink
                                      href="#"
                                      onClick={(
                                          e: MouseEvent<
                                              HTMLButtonElement,
                                              MouseEvent
                                          >
                                      ) => {
                                          e.preventDefault();
                                          // eslint-disable-next-line
                                          handleDeleteSkill(skill._id);
                                      }}
                                      display={["none", "block"]}
                                  >
                                      <Slash color="red" size="24" />
                                  </StyledNavLink>
                                  <StyledDropdown direction="left">
                                      <DropdownToggle variant="texted">
                                          <MoreVertical size="18" />
                                      </DropdownToggle>
                                  </StyledDropdown>
                              </StyledNavIcon>
                          </Fragment>
                      ),
                  }))
                : [],
        // eslint-disable-next-line
        [skills]
    );

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <>
            <Col col={12}>
                <Card height="100%">
                    {loading && (
                        <div
                            style={{
                                position: "absolute",
                                width: "100%",
                                top: 0,
                                left: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                                zIndex: 100,
                                backgroundColor: "rgba(0, 0, 0, 0.05)",
                            }}
                        >
                            <Spinner size="xl" />
                        </div>
                    )}
                    <StyledHeader>
                        <SectionTitle
                            title={`Skills ${skills?.totalDocs || ""}`}
                        />
                        <StyledHeaderRight>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    setShow(true);
                                }}
                                className="search-btn"
                            >
                                <i className="fa fa-plus" />
                            </Button>
                        </StyledHeaderRight>
                    </StyledHeader>
                    {skills && (
                        <div className="container-table">
                            <table ref={refTable} className="table-skills">
                                <thead>
                                    {table
                                        .getHeaderGroups()
                                        .map((headerGroup) => (
                                            <tr
                                                className="tr"
                                                key={headerGroup.id}
                                            >
                                                {headerGroup.headers.map(
                                                    (header, index) => (
                                                        <th
                                                            className={`th ${
                                                                index === 0
                                                                    ? "pl-2"
                                                                    : ""
                                                            }`}
                                                            key={header.id}
                                                        >
                                                            {header.isPlaceholder
                                                                ? null
                                                                : flexRender(
                                                                      header
                                                                          .column
                                                                          .columnDef
                                                                          .header,
                                                                      header.getContext()
                                                                  )}
                                                        </th>
                                                    )
                                                )}
                                            </tr>
                                        ))}
                                </thead>
                                <tbody>
                                    {table.getRowModel().rows.map((row) => (
                                        <tr key={row.id}>
                                            {row
                                                .getVisibleCells()
                                                .map((cell) => {
                                                    return (
                                                        <td
                                                            className="td"
                                                            key={cell.id}
                                                        >
                                                            {flexRender(
                                                                cell.column
                                                                    .columnDef
                                                                    .cell,
                                                                cell.getContext()
                                                            )}
                                                        </td>
                                                    );
                                                })}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </Card>
            </Col>

            {skills && (
                <Pagination
                    page={skills.page}
                    hasNext={skills.hasNextPage}
                    hasPrev={skills.hasPrevPage}
                    totalPages={skills.totalPages}
                    onChangePage={(page) => {
                        setPagination((prev) => ({ ...prev, page }));
                    }}
                />
            )}

            <ModalAddNewSkill
                show={show}
                onClose={() => {
                    setShow(false);
                    setSelectedSkill(undefined);
                }}
                onSubmit={async () => {
                    await fetchSkills();
                }}
                selectedSkill={selectedSkill}
            />
        </>
    );
};

export default RowOne;
