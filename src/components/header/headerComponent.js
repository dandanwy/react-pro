import React from 'react';
import {Input, Icon, Row, Col} from 'antd';
import './header.less';

export default class Header extends React.Component{
    render() {
        return (
            <div className="navbar">
                <Row>
                    <Col span={4}>
                        <div className="nav-wrap-left">
                            <a href="#" className="place">
                                <span>佛山</span>
                                <Icon type="down" theme="outlined" />
                            </a>
                        </div>
                    </Col>
                    <Col span={16}>
                    <div className="box-search">
                    <Input
                        placeholder="   输入商家/品类/商圈"
                        prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)',fontSize: 22 }} />}
                    />
                    </div>
                    </Col>
                    <Col span={4}>
                        <div className="nav-wrap-right">
                            <span className="my">
                                <i className="my-icon"><Icon type="user" theme="outlined" /></i>
                                <span>我的</span>
                            </span>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
} 