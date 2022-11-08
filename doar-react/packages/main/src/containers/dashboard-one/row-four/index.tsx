import {
    Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
} from "@doar/components";
import Customers from "../../../components/dashboard-one/customers";
import { ContainerRowFour } from "./style";
import Pagination from "../../../components/Pagination/Pagination";
import { FC, useEffect, useRef, useState } from "react";
import { usePersons } from "../../../hooks/usePersons";
import debounce from "lodash.debounce";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setValueSearchHeader } from "../../../redux/slices/searchHeader";
import Select, { MultiValue } from "react-select";

import React, { MouseEvent } from "react";
import { customStyleReactSelectPrimary } from "../../../react-select-styles/primary";
const RowFour = () => {
    const {
        fetchPersons,
        setPagination,
        valueSearchHeader,
        pagination,
        persons,
        setLoading,
        loading,
        setPersons,
        resetPersons,
        setDataQuery,
        query,
    } = usePersons();
    const dispatch = useAppDispatch();
    const { skills: skillsSelector } = useAppSelector(({ skills }) => skills);
    const { sectors: sectorsSelector } = useAppSelector(
        ({ sectors }) => sectors
    );
    const [labelWorkLoad, setlabelWorkLoad] = useState("Work load");
    useEffect(() => {
        // eslint-disable-next-line
        fetchPersons();
        // eslint-disable-next-line
        return () => {
            resetPersons();
            dispatch(setValueSearchHeader(""));
        };
        // eslint-disable-next-line
    }, []);

    const optionsWorkLoad = [
        {
            label: "All",
            value: {
                from: undefined,
                to: undefined,
            },
        },
        {
            label: "0>25",
            value: { from: 0, to: 25 },
        },
        {
            label: "25>50",
            value: { from: 25, to: 50 },
        },
        {
            label: "50>100",
            value: { from: 50, to: 100 },
        },
        {
            label: ">100",
            value: { from: 100, to: undefined },
        },
    ] as const;

    const onChangePage = (page: number) => {
        setPagination((prev) => ({ ...prev, page }));
    };

    const debouncedSearch = useRef(
        debounce(async (search: string) => {
            // eslint-disable-next-line
            await fetchPersons({ search });
        }, 500)
    ).current;

    useEffect(() => {
        // eslint-disable-next-line
        fetchPersons();
        // eslint-disable-next-line
    }, [pagination]);
    useEffect(() => {
        // eslint-disable-next-line
        debouncedSearch(valueSearchHeader);
        // eslint-disable-next-line
    }, [valueSearchHeader]);

    const filtersLine = () => {
        return (
            <div className="d-flex justify-between gap-2">
                <div className="flex-2">
                    <Select
                        isMulti
                        onChange={(newValues) => {
                            setDataQuery(
                                "skills",
                                newValues.map(({ value }) => value)
                            );
                        }}
                        options={
                            skillsSelector
                                ? skillsSelector.map(({ _id, value }) => ({
                                      label: value,
                                      value: _id,
                                  }))
                                : []
                        }
                        isClearable
                        styles={customStyleReactSelectPrimary}
                    />
                </div>
                <div className="d-flex gap-2 flex-1 justify-end">
                    <Dropdown className="mb-2">
                        <DropdownToggle>{labelWorkLoad}</DropdownToggle>
                        <DropdownMenu>
                            {React.Children.toArray(
                                optionsWorkLoad.map(({ label, value }) => {
                                    return (
                                        // eslint-disable-next-line
                                        <DropdownItem
                                            active={
                                                value?.from ===
                                                query["workload>"]
                                            }
                                            path="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setlabelWorkLoad(label);
                                                setDataQuery(
                                                    "workload<",
                                                    value.to
                                                );
                                                setDataQuery(
                                                    "workload>",
                                                    value.from
                                                );
                                            }}
                                        >
                                            {label}
                                        </DropdownItem>
                                    );
                                })
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Select
                        placeholder="Select sector..."
                        options={
                            sectorsSelector
                                ? [
                                      { label: "All", value: "" },
                                      ...sectorsSelector.map(
                                          ({ _id, value }) => ({
                                              label: value,
                                              value: _id,
                                          })
                                      ),
                                  ]
                                : []
                        }
                        onChange={(selectedValue) => {
                            // eslint-disable-next-line
                            selectedValue?.value !== undefined &&
                                setDataQuery("sector", selectedValue.value);
                        }}
                        styles={customStyleReactSelectPrimary}
                    />
                </div>
            </div>
        );
    };

    return (
        <>
            <ContainerRowFour>
                <Col md={12} xl={12} mt="10px" mb="10px">
                    {filtersLine()}
                    <Customers
                        fetchPersons={fetchPersons}
                        persons={persons}
                        loading={loading}
                        pagination={pagination}
                        setLoading={setLoading}
                        setPersons={setPersons}
                    />
                </Col>
            </ContainerRowFour>
            {persons && (
                <Pagination
                    onChangePage={onChangePage}
                    page={persons.page}
                    totalPages={persons.totalPages}
                    hasNext={persons.hasNextPage}
                    hasPrev={persons.hasPrevPage}
                />
            )}
        </>
    );
};

export default RowFour;
