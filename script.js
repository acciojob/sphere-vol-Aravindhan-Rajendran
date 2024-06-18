function volume_sphere(r) {
    if(r>=0 && !isNaN(r))
    {
        var volume=(4/3)*Math.PI*r*r*r;
        return volume.toFixed(4);
    }
    else
    {
        return 'NaN';
    }
} 

window.onload = function() {
    document.getElementById('MyForm').onsubmit = function(event) {
        event.preventDefault();
        var r = document.getElementById('radius').value;
        document.getElementById('volume').value = volume_sphere(r);
    };
};