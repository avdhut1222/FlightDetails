var counter = 0,
    passengerInfoSection = null,
    firstAdd = true;

    
function addPassengerInfoSection() {
    if(firstAdd){
        passengerInfoSection = $("#passengerInfoComponent");
        firstAdd = false;
    }
    var clonePassengerInfoSection = passengerInfoSection.clone(true);
    fixIds(clonePassengerInfoSection, ++counter);
    $("#passengerInformation").append(clonePassengerInfoSection);
}

function fixIds(elem, counter) {
    $(elem).find("[id]").add(elem).each(function() {
        this.id += counter;
        this.name += counter;
    });
    $(elem).find("[for]").add(elem).each(function() {
        this.htmlFor = this.htmlFor + counter;
    });
    $(elem).find("[name]").add(elem).each(function() {
        this.value = '';
    });
}

function deletePassengerInfoSection(){
    var id = event.currentTarget.id;
    id = id.replace(/deletePassengerSection/gi, '');
    var passengerInfoComponents = $(".passenger-info-component");
    if(passengerInfoComponents && passengerInfoComponents.length > 1){
        $("#passengerInfoComponent" + id).remove();
    } else {
        alert("Atleast one passenger info section required!");
    }
}

function textCounter(){
    var maxLength = $("#comment").attr("maxlength"),
        length = $("#comment").val().length;
    var remainingCount = maxLength - length;
    $("#commentCounter").html('Characters remaining: ' + remainingCount)
    
}

function transformToUpperCase(){
    event.currentTarget.value = event.currentTarget.value.toUpperCase();
}