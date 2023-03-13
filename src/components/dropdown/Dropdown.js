//Source: https://medium.com/tinyso/how-to-create-a-dropdown-select-component-in-react-bf85df53e206

import React, { useEffect, useRef, useState } from "react";

import threadService from '../../services/threadService'

import "./Dropdown.css";

const Icon = () => {
    return (
        <svg height="20" width="20" viewBox="0 0 20 20" className="create-post-unblur">
            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
        </svg>
    );
};

const CloseIcon = () => {
    return (
        <svg height="20" width="20" viewBox="0 0 20 20" className="create-post-unblur">
            <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
        </svg>
    );
};

const Dropdown = ({
    placeHolder,
    isSearchable,
    onChange
}) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const [searchValue, setSearchValue] = useState("");

    const [options, setOptions] = useState([])

    const searchRef = useRef();
    const inputRef = useRef();



    useEffect(() => {
        setSearchValue("");
        if (showMenu && searchRef.current) {
            searchRef.current.focus();
        }
    }, [showMenu]);

    useEffect(() => {
        const handler = (e) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        };

    });

    const handleInputClick = (e) => {
        setShowMenu(!showMenu);
    };

    const getDisplay = () => {
        if (!selectedValue || selectedValue.length === 0) {
            return placeHolder;
        }
        
        return selectedValue.label;
    };

    const removeOption = (option) => {
        return selectedValue.filter((o) => o.value !== option.value);
    };

    

    const onItemClick = (option) => {
        let newValue;
        
        newValue = option;
        
        setSelectedValue(newValue);
        onChange(newValue);
    };

    const isSelected = (option) => {
        if (!selectedValue) {
            return false;
        }

        return selectedValue.value === option.value;
    };

    const onSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const DropdownMenu = () => {


        const getOptions = () => {
            threadService.getAllThreads()
                .then((threads) => {
                    let newOptions = []

                    for (let i = 0; i < threads.length; i++) {
                        const thread = threads[i]
                        console.log(thread)
                        const newOption = { value: thread.threadName, label: thread.threadName }
                        newOptions.push(newOption)
                    }
                    console.log(newOptions)
                    setOptions(newOptions)

                })

        }

        useEffect(() => {
            //Set options state variable
            if (options.length === 0) {
                getOptions()
            }

        }, [])

        return (
            <div className="dropdown-menu create-post-unblur">
                {isSearchable && (
                    <div className="search-box create-post-unblur">
                        <input onChange={onSearch} value={searchValue} ref={searchRef} className="create-post-unblur" />
                    </div>
                )}
                {options.map((option) => {
                    return (
                        <div
                            onClick={() => onItemClick(option)}
                            key={option.value}
                            className={`create-post-unblur dropdown-item ${isSelected(option) && "selected"}`}
                        >
                            {option.label}
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div className="dropdown-container create-post-unblur">
            <div ref={inputRef} onClick={handleInputClick} className="dropdown-input create-post-unblur">
                <div className="dropdown-selected-value create-post-unblur">{getDisplay()}</div>
                <div className="dropdown-tool create-post-unblur">
                    <div className="dropdown-tool create-post-unblur">
                        <Icon />
                    </div>
                </div>
            </div>
            {showMenu && <DropdownMenu />}
        </div>
    );
};

export { Dropdown };
