const store = {
	state: reactive({
		currentTab: 0,
		currentSubtab: 0,
		mobile: window.innerWidth < 1100,
	}),
	currentTab() {
		return this.state.currentTab;
	},
	currentSubtab() {
		return this.state.currentSubtab;
	},
	mobile() {
		return this.state.mobile;
	},
	setCurrentTab(tab) {
		this.state.currentTab = tab;
		this.state.currentSubtab = 0;
	},
	setCurrentSubtab(subtab) {
		this.state.currentSubtab = subtab;
	},
};

export default store;
