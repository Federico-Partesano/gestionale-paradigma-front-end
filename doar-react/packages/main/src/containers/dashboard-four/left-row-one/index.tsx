import {
    Button,
    Card,
    Col,
    DropdownToggle,
    SectionTitle,
    Spinner,
} from "@doar/components";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { Sector } from "../../../models/Sectors";
import {
    StyledHeader,
    StyledNavIcon,
    StyledNavLink,
    StyledDropdown,
    StyledHeaderRight,
} from "./style";
import {
    useEffect,
    useRef,
    useMemo,
    Fragment,
    MouseEvent,
    useState,
} from "react";
import { useSectors } from "../../../hooks/useSectors";
import { Edit, MoreVertical, Slash } from "react-feather";
import Pagination from "../../../components/Pagination/Pagination";
import "./index.scss";
import ModalAddNewSector from "./ModalAddNewSector";
import { useEndpoints } from "../../../hooks/useEndpoints";
import { useAppDispatch } from "../../../redux/hooks";
import { setValueSectors } from "../../../redux/slices/sectors";

const LeftRowOne = () => {
    const [show, setShow] = useState(false);
    const { sectors, fetchSectors, loading, setPagination } = useSectors();
    const { deleteSector, getSectors } = useEndpoints();
    const dispatch = useAppDispatch();
    const [selectedSector, setSelectedSector] = useState<Sector>();
    const refTable = useRef<HTMLTableElement>(null);
    const columnHelper = createColumnHelper<Sector & { action: any }>();

    useEffect(() => {
        // eslint-disable-next-line
        fetchSectors();
    }, []);

    useEffect(() => {
        setShow(Boolean(selectedSector));
    }, [selectedSector]);

    const handleDeleteSector = async (_id: string) => {
        try {
            await deleteSector(_id);
            await fetchSectors();
            const { data } = await getSectors();
            dispatch(setValueSectors(data));
        } catch (error) {
            console.error("error", error);
        }
    };

    const columns = useMemo(
        () => [
            columnHelper.accessor("value", {
                id: "Value",
                cell: (info) => (
                    <p className="table-field-name">{info.getValue()}</p>
                ),
                header: () => <span className="ps-1">Sector</span>,
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
        [sectors]
    );

    const data = useMemo(
        () =>
            sectors
                ? sectors.docs.map((sector) => ({
                      ...sector,
                      action: (
                          <Fragment key={sector._id}>
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
                                              setSelectedSector(sector);
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
                                          handleDeleteSector(sector._id);
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
        [sectors]
    );

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
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
                        title={`Sectors ${sectors?.totalDocs || ""}`}
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
                {sectors && (
                    <div className="container-table">
                        <table ref={refTable} className="table-sectors">
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
            {sectors && (
                <Pagination
                    page={sectors.page}
                    hasNext={sectors.hasNextPage}
                    hasPrev={sectors.hasPrevPage}
                    totalPages={sectors.totalPages}
                    onChangePage={(page) => {
                        setPagination((prev) => ({ ...prev, page }));
                    }}
                />
            )}
            <ModalAddNewSector
                show={show}
                onClose={() => {
                    setShow(false);
                    setSelectedSector(undefined);
                }}
                onSubmit={async () => {
                    await fetchSectors();
                }}
                selectedSector={selectedSector}
            />
        </Col>
    );
};

export default LeftRowOne;
