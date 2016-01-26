var masterRepeaterLabel = 'repeater';

function isEpi_Repeater() {
    alert('epi_repeater!');
};

function FakeCellData() {
    this.column0 = {
        text,
        type,}
};


var fakeCellData = FakeCellData()[2];
fakeCellData.text[0] = "butthole";
fakeCellData.text[1] = "butthole2";
fakeCellData.type[0] = "peni";
fakeCellData.type[1] = "peni2";
alert(fakeCellData.text[0]);
alert(fakeCellData.text[1]);
alert(fakeCellData.type[0]);
alert(fakeCellData.type[1]);


function FakeSource() {
    this.adaptiveStyles = {},
    this.data = [2],
    this.dataProps = ["column0"],
    this.id = "ed147f6bd3704d85a4705e176a56d077",
    this.label = "rep2",
    this.objects = [],
    this.owner = [],
    this.parent = [],
    this.repeaterPropMap = [],
    this.scriptIds = ["u27"],
    this.style = {
        location: { x: "250", y: "210"},
        size: {height: "150", width: "250"},
    },
    this.styleType = "repeater",
    this.type = "repeater",
    this.visible = "true"
};



var row = new Object();

var masterRepeater = {
	label: masterRepeaterLabel,
	obj: getRepeater(masterRepeaterLabel),
	id: $axure('@'+masterRepeaterLabel).getElementIds()[0]
};

function getRepeater(repeaterLabel) {
	var theRepeater;
	$axure(function(obj) {
		return obj.type == 'repeater';
	}).each(function(obj, repeaterId) {
		if(obj.label == repeaterLabel) {
			theRepeater = obj;
		}
	});
	return theRepeater;
}

function setRepeaterDataSet(targetRepeater, sourceRepeater) {
	var target = getRepeater(targetRepeater);
	var source = getRepeater(sourceRepeater);
	var targetId = $axure('@'+targetRepeater).getElementIds()[0];
	var sourceId = $axure('@'+sourceRepeater).getElementIds()[0];
	epi.repeater.setDataSet(targetId, sourceId);
	epi.repeater.refreshRepeater(targetId);
	target.data = source.data;
	console.log(target);
}

setRepeaterDataSet('repeater2', masterRepeater.label);


watch(epi.action, "repeatersToRefresh", function(event, item, targetId) {
	if(targetId[0] == masterRepeater.id) {
		setRepeaterDataSet('repeater2', 'repeater');
	}
});