import {
    Button,
    Card,
    SectionTitle,
    Spinner,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
} from "@doar/components";
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
import ReactTooltip from "react-tooltip";
import { PaginatePersons, Person } from "../../../models/Person";
import { useEndpoints } from "../../../hooks/useEndpoints";
import { Mail, Slash, User, MoreVertical, Edit } from "react-feather";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import Tippy from "@tippyjs/react";
import {
    StyledNavIcon,
    StyledNavLink,
    StyledDropdown,
    StyledHeader,
    StyledHeaderRight,
} from "./style";

import { ModalAddPerson } from "./ModalAddPerson";
import "./index.scss";

interface ICustomers {
    fetchPersons: () => void;
    setLoading: Dispatch<SetStateAction<boolean>>;
    loading: boolean;
    pagination: {
        limit: number;
        page: number;
    };
    persons?: PaginatePersons;
    setPersons: (newPersons: PaginatePersons | undefined) => void;
}

const Customers: FC<ICustomers> = ({
    fetchPersons,
    setLoading,
    loading,
    pagination,
    persons,
}) => {
    const [show, setShow] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState<Person>();
    const { deletePerson } = useEndpoints();
    const refTable = useRef<HTMLTableElement>(null);

    const columnHelper = createColumnHelper<Person & { action: any }>();

    useEffect(() => {
        if (!refTable.current) return;
        refTable.current.children[0].scrollIntoView();
    }, [pagination]);

    const getColorBadge = (
        percentual: number
    ): { className: string; color: "warning" | "success" | "danger" } => {
        switch (true) {
            case percentual === 0:
                return { className: "", color: "warning" };

            case percentual > 1 && percentual <= 50:
                return { className: "background-orange", color: "success" };

            case percentual > 50 && percentual <= 99:
                return {
                    className: "background-light-green",
                    color: "success",
                };
            case percentual === 100:
                return { className: "", color: "success" };

            default:
                return { className: "", color: "danger" };
        }
    };

    const columns = useMemo(
        () => [
            columnHelper.accessor((row) => `${row.surname} ${row.name}`, {
                id: "Surname",
                cell: (info) => (
                    <p className="table-field-name">{info.getValue()}</p>
                ),
                header: () => <span>Surname Name</span>,
                footer: (info) => info.column.id,
            }),
            columnHelper.accessor("email", {
                header: () => "Email",
                cell: (info) => (
                    <>
                        <Tippy content={info.getValue()}>
                            <p className="truncate">{info.renderValue()}</p>
                        </Tippy>
                    </>
                ),
                footer: (info) => info.column.id,
            }),
            columnHelper.accessor("teams", {
                header: () => "Projects",
                cell: (info) => (
                    // eslint-disable-next-line
                    <Tippy
                        content={info
                            .getValue()
                            // eslint-disable-next-line
                            .map(({ name }) => name)
                            .join(", ")}
                    >
                        <p className="table-field-name truncate">
                            {info
                                .getValue()
                                // eslint-disable-next-line
                                .map(({ name }) => name)
                                .join(", ")}
                        </p>
                    </Tippy>
                ),
                footer: (info) => info.column.id,
            }),
            columnHelper.accessor("skills", {
                header: () => "Skills",
                cell: (info) => (
                    // eslint-disable-next-line
                    <Tippy
                        content={info
                            .getValue()
                            // eslint-disable-next-line
                            .map(({ value }) => value)
                            .join(", ")}
                    >
                        <p className="table-field-name truncate">
                            {info
                                .getValue()
                                // eslint-disable-next-line
                                .map(({ value }) => value)
                                .join(", ")}
                        </p>
                    </Tippy>
                ),
                footer: (info) => info.column.id,
            }),
            columnHelper.accessor("sector", {
                header: () => "Sector",
                cell: (info) => (
                    // eslint-disable-next-line
                    <Tippy content={info.getValue()?.value || ""}>
                        <p className="table-field-name truncate">
                            {info.getValue()?.value || ""}
                        </p>
                    </Tippy>
                ),
                footer: (info) => info.column.id,
            }),
            columnHelper.accessor("workLoad", {
                header: () => <p className="text-center">Work load</p>,
                cell: (info) => (
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Badge
                            className={getColorBadge(info.getValue()).className}
                            color={getColorBadge(info.getValue()).color}
                        >
                            {`${info.getValue()}%`}
                        </Badge>
                    </div>
                ),
                footer: (info) => info.column.id,
            }),
            columnHelper.accessor("action", {
                header: () => <p className="header-title-actions">Actions</p>,
                // eslint-disable-next-line
                cell: (info) => info.renderValue(),
                footer: (info) => info.column.id,
            }),
        ],
        // eslint-disable-next-line
        [persons]
    );
    const handleRemovePerson = async (id: string) => {
        setLoading(true);
        try {
            await deletePerson(id);
            fetchPersons();
        } catch (error) {
            console.error("error", error);
        } finally {
            setLoading(false);
        }
    };

    const data = useMemo(
        () =>
            persons
                ? persons.docs.map((person) => ({
                      ...person,
                      action: (
                          <Fragment key={person._id}>
                              <StyledNavIcon>
                                  <StyledNavLink
                                      href="#"
                                      onClick={(
                                          e: MouseEvent<
                                              HTMLButtonElement,
                                              MouseEvent
                                          >
                                      ) => {
                                          e.preventDefault();
                                          setSelectedPerson(person);
                                      }}
                                      display={["none", "block"]}
                                  >
                                      <Edit color="green" size="24" />
                                  </StyledNavLink>
                                  <StyledNavLink
                                      href={`mailto:${person.email}`}
                                      display={["none", "block"]}
                                  >
                                      <Mail size="24" />
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
                                          handleRemovePerson(person._id);
                                      }}
                                      display={["none", "block"]}
                                  >
                                      <Slash color="red" size="24" />
                                  </StyledNavLink>
                                  <StyledDropdown direction="left">
                                      <DropdownToggle variant="texted">
                                          <MoreVertical size="18" />
                                      </DropdownToggle>
                                      <DropdownMenu>
                                          <DropdownItem path={""}>
                                              <Mail size="15" /> Messages
                                          </DropdownItem>
                                          <DropdownItem path={""}>
                                              <User size="15" />
                                              Profile
                                          </DropdownItem>
                                          <DropdownItem path="#">
                                              <Slash size="15" /> Delete
                                          </DropdownItem>
                                      </DropdownMenu>
                                  </StyledDropdown>
                              </StyledNavIcon>
                          </Fragment>
                      ),
                  }))
                : [],
        // eslint-disable-next-line
        [persons]
    );

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });
    const clickHandler = () => {
        setShow((prev) => !prev);
    };

    const handleAddNewPerson = () => {
        clickHandler();
    };

    useEffect(() => {
        setShow(Boolean(selectedPerson));
    }, [selectedPerson]);

    return (
        <>
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
                        title={`Persons ${persons?.totalDocs || ""}`}
                    />
                    <StyledHeaderRight>
                        <Button
                            variant="contained"
                            onClick={() => {
                                handleAddNewPerson();
                            }}
                            className="search-btn"
                        >
                            <i className="fa fa-plus" />
                        </Button>
                    </StyledHeaderRight>
                </StyledHeader>
                {persons && (
                    <div className="container-table">
                        <table ref={refTable} className="table-customers">
                            <thead>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <tr className="tr" key={headerGroup.id}>
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
                                                              header.column
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
                                        {row.getVisibleCells().map((cell) => {
                                            return (
                                                <td
                                                    className="td"
                                                    key={cell.id}
                                                >
                                                    {flexRender(
                                                        cell.column.columnDef
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
            <ModalAddPerson
                setSelectedPerson={setSelectedPerson}
                selectedPerson={selectedPerson}
                show={show}
                onSubmit={async () => {
                    // eslint-disable-next-line
                    await fetchPersons();
                    setShow(false);
                }}
                setShow={setShow}
                onClick={() => console.log("click")}
            />
        </>
    );
};

export default Customers;
