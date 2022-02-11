import { observable, action } from "mobx";

export class AppStore {
    @observable
    num = 1;

    @observable
    loading = false;

    menus = [
        {
            label: "Formily",
            key: "1",
            children: [
                {
                    label: "Schema",
                    key: "11",
                    link: "/Schema",
                },
            ],
        },
        {
            label: "Antd",
            key: "2",
            children: [
                {
                    label: "List",
                    key: "11",
                    link: "/Antd/List",
                },
            ],
        },
        {
            label: "Corn",
            key: "3",
            link: "/Corn",
        },
        {
            label: "Schema Edit",
            key: "4",
            link: "/SchemaEdit",
        },
        {
            label: "Schema Edit2",
            key: "5",
            link: "/SchemaEdit2",
        },
    ];

    static getInstance() {
        // 单例模式
        if (!AppStore.instance) {
            AppStore.instance = new AppStore();
        }
        return AppStore.instance;
    }

    @action
    setLoading(loading) {
        this.loading = loading;
    }

    @action
    plus() {
        this.num += 1;
    }
}

const appStore = AppStore.getInstance();
const Stores = {
    appStore,
};

/* 当前文件夹下store */

const req = require.context(".", false, /Store$/);
req.keys().map((key) => {
    const Store = req(key).default;
    const namespace = Store.namespace || key;
    appStore[namespace] = Stores[namespace] = new Store(appStore);
});

/* page下store */

const reqPage = require.context("../pages", true, /store$/);
reqPage.keys().map((key) => {
    const Store = reqPage(key).default;
    const namespace = Store.namespace || key;
    appStore[namespace] = Stores[namespace] = new Store(appStore);
});

export default Stores;
