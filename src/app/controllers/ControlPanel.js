class ControlPanel {
    constructor($scope, MarsGrid) {
        this.$scope = $scope;
        $scope.store = {
            commands: "53\n11E\nRFRFRFRF\n32N\nFRRFLLFFRRFLL\n03W\nLLFFFLFLFL\n"
        }

        this.$scope.grid = MarsGrid;
        $scope.submitHandler = this.submitHandler;
    }
    submitHandler() {
        this.grid.runInstruction(this.store.commands);
    }
}

export { ControlPanel }