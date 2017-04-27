class MarsSurface {
    constructor($scope, MarsGrid) {
        this.MarsGrid = MarsGrid;
        this.$scope = $scope;

        $scope.store = {
            output: MarsGrid.output
        }
    }
}


export { MarsSurface }