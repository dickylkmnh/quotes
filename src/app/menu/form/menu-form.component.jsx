import React, { useState, useEffect } from 'react';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import {
    Input
} from 'antd';

const MenuFormComponent = (props) => {
    const [value1, setValue1] = useState(props.oneData.title || '');
    const [value2, setValue2] = useState(props.oneData.author || '');

    useEffect(() => {
        setValue1(props.oneData.title);
        setValue2(props.oneData.author)
    }, [props.oneData]);

    const footerDialog = () => {
        return (
            <div>
                <Button
                    className="p-button-outlined"

                    label="Cancel"
                    onClick={() => {
                        props.onHide();
                        onCloseModal();
                    }}
                />
                {props.createModal ? (
                    <Button
                        className="p-button-primary"
                        label="Create"
                        onClick={() => {
                            const data = {
                                title: value1,
                                author: value2
                            }
                            props.onSubmit(data, 'create');
                            onCloseModal();
                        }}
                        disabled={value1 && value2 ? false : true}
                    />
                )
                    :
                    (
                        <Button
                            className="p-button-primary"
                            label="Edit"
                            onClick={() => {
                                const data = {
                                    title: value1,
                                    author: value2
                                }
                                props.onSubmit(data, 'edit');
                                onCloseModal();
                            }}
                            disabled={value1 && value2 ? false : true}
                        />
                    )}
            </div>
        );
    }

    function onCloseModal() {
        setValue1('')
        setValue2('')
    }

    return (
        <>
            {props.createModal && (
                <Dialog
                    header="create"
                    visible={props.createModal}
                    onHide={() => {
                        props.onHide();
                        onCloseModal();
                    }}
                    footer={footerDialog}
                >
                    <div className="col-12 mt-2 text-center">
                        <div className="row">
                            <div className="col-12">
                                <Input
                                    value={value2}
                                    placeholder="author"
                                    onChange={(e) => setValue2(e.target.value)}
                                />
                            </div>
                            <div className="col-12">
                                <Input
                                    value={value1}
                                    className="mt-3"
                                    placeholder="title"
                                    onChange={(e) => setValue1(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </Dialog>
            )}
            {props.editModal && (
                <Dialog
                    header="edit"
                    visible={props.editModal}
                    onHide={() => {
                        props.onHide();
                        onCloseModal();
                    }}
                    footer={footerDialog}
                >
                    <div className="col-12 mt-2 text-center">
                        <div className="row">
                            <div className="col-12">
                                <Input
                                    value={value2}
                                    placeholder="author"
                                    onChange={(e) => setValue2(e.target.value)}
                                />
                            </div>
                            <div className="col-12">
                                <Input
                                    value={value1}
                                    className="mt-3"
                                    placeholder="title"
                                    onChange={(e) => setValue1(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </Dialog>
            )}
        </>
    );
}

export default MenuFormComponent;
