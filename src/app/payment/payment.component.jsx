import React, { useState, useEffect } from 'react';

import PaymentService from '../../service/payment.service.js';

import { SelectButton } from 'primereact/selectbutton';
import { Button } from 'primereact/button';
import {
    Input,
    Radio,
    Tag
} from 'antd';
import {
    PayCircleOutlined
} from '@ant-design/icons';

const PaymentComponent = () => {
    const _service = new PaymentService;

    const [paymentList, setPaymentList] = useState([]);
    const [selectValue, setSelectValue] = useState('other');
    const [radioValue, setRadioValue] = useState('alfamart');
    const [radioValueBank, setRadioValueBank] = useState('bca');

    const selectOptions = ['other', 'credit-card'];

    useEffect(() => {
        loadData();
    }, []);

    function loadData() {
        _service.getPayment().then((res) => {
            if (res.status === 200) {
                const data = res.data;
                setPaymentList(data)
            } else {
                alert('ERROR 404')
            }
        })
    }

    function onChangeRadio(e) {
        setRadioValue(e.target.value);
        console.log(e.target.value);
    }

    function onChangeRadioBank(e) {
        setRadioValueBank(e.target.value);
        console.log(e.target.value);
    }
    return (
        <>
            <div className="container">
                <div className="col-12 mt-3">
                    <h2><b>Payment Confirmation</b></h2>
                    <hr />
                </div>
                <div className="col-12 d-flex justify-content-center mb-2">
                    <div className="col-5">
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="card-title">
                                    <h5><b>please select a nominal money</b></h5>
                                    <hr />
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12 mb-2">
                                            <a onClick={() => alert('10.000')}>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h6><b>Rp. 10.000</b></h6>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-12 mb-2">
                                            <a onClick={() => alert('20.000')}>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h6><b>Rp. 20.000</b></h6>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-12 mb-2">
                                            <a onClick={() => alert('30.000')}>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h6><b>Rp. 30.000</b></h6>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-12 mb-2">
                                            <a onClick={() => alert('50.000')}>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h6><b>Rp. 50.000</b></h6>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-12 mb-2">
                                            <a onClick={() => alert('100.000')}>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h6><b>Rp. 100.000</b></h6>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center mb-2">
                    <div className="col-5">
                        <div className="card pb-2">
                            <div className="card-body text-center">
                                <div className="card-title mb-4"><h5><b>How would you like to pay ?</b></h5></div>
                                <div className="card-text mb-4">
                                    <SelectButton
                                        value={selectValue}
                                        options={selectOptions}
                                        onChange={(e) => {
                                            setSelectValue(e.value)
                                            console.log(e.value);
                                        }}
                                    />
                                </div>
                                {selectValue == 'other' && (
                                    <div className="card-text">
                                        <div className="col-12 mb-4">
                                            <Radio.Group
                                                onChange={onChangeRadio}
                                                value={radioValue}
                                            >
                                                <Radio value="alfamart">
                                                    <Tag color="red">Alfamart</Tag>
                                                </Radio>
                                                <Radio value="indomaret">
                                                    <Tag color="blue">Indomaret</Tag>
                                                </Radio>
                                            </Radio.Group>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <Input
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div className="col-12">
                                            <Input
                                                placeholder="Mobile phone"
                                            />
                                        </div>
                                    </div>
                                )}
                                {selectValue == 'credit-card' && (
                                    <div className="card-text">
                                        <div className="col-12 mb-4">
                                            <Radio.Group
                                                onChange={onChangeRadioBank}
                                                value={radioValueBank}
                                            >
                                                <Radio value="bca">
                                                    <Tag color="blue">BCA</Tag>
                                                </Radio>
                                                <Radio value="bri">
                                                    <Tag color="cyan">BRI</Tag>
                                                </Radio>
                                            </Radio.Group>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <Input
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <div className="row">
                                                <div className="col-10">
                                                    <Input
                                                        placeholder="Account number"
                                                    />
                                                </div>
                                                <div className="col-2">
                                                    {radioValueBank == 'bca' && (
                                                        <Tag color="blue">BCA</Tag>

                                                    )}
                                                    {radioValueBank == 'bri' && (
                                                        <Tag color="cyan">BRI</Tag>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <Input
                                                placeholder="Mobile phone"
                                            />
                                        </div>
                                    </div>
                                )}
                                {selectValue == null && (
                                    <p>
                                        <b className="text-danger">Harap pilih metode pembayaran !</b>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <div className="col-5">
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="card-title">
                                    <div>
                                        <h6>
                                            <PayCircleOutlined /> amount to be paid
                                        </h6>
                                        <hr />
                                    </div>
                                    <div>
                                        <h4>
                                            <p><b>Rp. 100.000</b></p>
                                        </h4>
                                    </div>
                                    <div>
                                        <Button
                                            className="btn-block p-button-primary"
                                            label="Pay"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PaymentComponent;