import { observable, action } from "mobx";
import AbstractModel from "@/components/AbstractPage/model";

export default class DemoStore extends AbstractModel {
    static namespace = "demoStore";
    pageName = "demo";

    @observable roleList = [];

    constructor() {
        super({
            service: {
                search: {
                    url: "/api/user/query",
                },
                add: {
                    url: "/api/user/add",
                    method: "post",
                },
                update: {
                    url: "/api/user/update",
                    method: "post",
                    isFormData: true,
                },
                delete: {
                    url: "/api/user/delete",
                },
                getRole: {
                    url: "/api/role/query",
                },
            },
            search: [
                {
                    key: "name",
                    title: "姓名",
                    type: "Select",
                    enums: [
                        {
                            label: "王小二",
                            value: "wxe",
                        },
                        {
                            label: "杜小三",
                            value: "dxs",
                        },
                    ],
                },
                {
                    key: "phone",
                    title: "手机号",
                    type: "Input",
                },
                {
                    key: "role",
                    title: "角色",
                    type: "Select",
                    enums: "roleList",
                },
            ],
            table: {
                columns: [
                    {
                        title: "ID",
                        dataIndex: "id",
                        key: "id",
                    },
                    {
                        title: "名称",
                        dataIndex: "name",
                        key: "name",
                    },
                    {
                        title: "手机号",
                        dataIndex: "phone",
                        key: "phone",
                    },
                ],
                otherProps: {},
            },
        });
    }

    @action
    async getRole() {
        try {
            const res = await this.service.getRole();
            if (res) {
                this.roleList = res;
            }
        } catch (error) {
            console.log(error);
        }
    }
}
