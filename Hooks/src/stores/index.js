import { observable, action } from "mobx";

export class AppStore {
    @observable
    num = 1;

    @observable
    loading = false;

    menus = [
        {
            label: "StateHook",
            key: "1",
            icon: "appstore",
            link: "/StateHook",
        },
        {
            label: "EffectHook",
            key: "2",
            icon: "appstore",
            link: "/EffectHook",
        },
        {
            label: "CustomHook",
            key: "3",
            icon: "appstore",
            link: "/CustomHook",
        },
        {
            label: "ContextHook",
            key: "4",
            icon: "appstore",
            link: "/ContextHook",
        },
        {
            label: "GoodHook",
            key: "5",
            icon: "appstore",
            link: "/GoodHook",
        },
        {
            label: "单例页面",
            key: "6",
            icon: "appstore",
            link: "/simple",
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
