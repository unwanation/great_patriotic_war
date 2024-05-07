const store = {
	state: reactive({
		currentTab: 0,
		currentSubtab: 0,
		mobile: window.innerWidth < 1100,
		correctAnswers: 0,
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
	correctAnswers() {
		return this.state.correctAnswers;
	},
	setCurrentTab(tab) {
		this.state.currentTab = tab;
		this.state.currentSubtab = 0;
	},
	setCurrentSubtab(subtab) {
		this.state.currentSubtab = subtab;
	},
	addCorrectAnswer() {
		this.state.correctAnswers++;
	},
};

export default store;
