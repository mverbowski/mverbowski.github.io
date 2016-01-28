var masterRepeaterLabel = 'repeater';

function isEpi_Repeater() {
    alert('epi_repeater!');
};

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

function getRepeaterId(targetRepeater) {
    var targetId = $axure('@' + targetRepeater).getElementIds()[0];
    return targetId; 
}

function ModifyActiveDataSet(targetRepeater, colValue, modValue, index) {
    epi.repeater.ModifyActiveDataSet(targetRepeater, colValue, modValue, index);
}

function AddRowToDataSet(targetRepeater, colValue, value) {
    epi.repeater.AddRowToDataSet(targetRepeater, colValue, value);
}

function AddJsonToRepeater(targetRepeater, jsonData)
{
    var len = jsonData.length;
    for (var i = 0; i < len; i++) {
        var count = 0;
        for (var item in jsonData[i]) {
            epi.repeater.AddRowToDataSet(targetRepeater, 'column'[count], jsonData[i][item]);

            count += 1;
        }
    }
}

function RemoveRowFromDataSet(targetRepeater, index, amount) {
    epi.repeater.RemoveRowFromDataSet(targetRepeater, index, amount);
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