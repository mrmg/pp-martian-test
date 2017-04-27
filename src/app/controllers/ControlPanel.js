class ControlPanel {
    constructor($scope) {
        this.store = {
            startPos: '',
            instructions: ''
        }

        $scope.submitHandler = this.submitHandler;
    }
    submitHandler() {
        console.log(this.store.startPos, this.store.instructions);
    }
}

export { ControlPanel }