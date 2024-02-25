const store = {
	state: reactive({
		currentTab: 0,
	}),
	currentTab() {
		return this.state.currentTab;
	},
	setCurrentTab(tab) {
		this.state.currentTab = tab;
	},
};

export default store;
