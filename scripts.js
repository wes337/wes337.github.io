$('#polygonizr').polygonizr({
    restNodeMovements: 1,
    duration: 3,
    nodeMovementDistance: 100,
    numberOfNodes: 30,
    nodeDotSize: 2.5,
    nodeEase: "easeOut",
    nodeFancyEntrance: true,
    randomizePolygonMeshNetworkFormation: true,
    specifyPolygonMeshNetworkFormation: function (i) {
        var forEachNode = {
            x: this.canvasWidth - ((this.canvasWidth / 2) + (this.canvasHeight / 2) * Math.cos(i * (2 * Math.PI / this.numberOfNodes))) * Math.random(),
            y: this.canvasHeight - (this.canvasHeight * (i / this.numberOfNodes))
        };
        return forEachNode;
    },
    nodeRelations: 3,
    animationFps: 30,
    nodeDotColor: "180, 47, 62",
    nodeLineColor: "200, 53, 69",
    nodeFillColor: "212, 92, 105",
    nodeFillAlpha: 0.5,
    nodeLineAlpha: 0.5,
    nodeDotAlpha: 1.0,
    nodeFillSapce: true,

    nodeGlowing: false,

    canvasWidth: $(this).width(),
    canvasHeight: $(this).height(),
    canvasPosition: "absolute"
});

// Trigger animations on scroll
$('#about').waypoint(function() {
    jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
        },2000);
    });  
});

$(document).ready(function(){
    $('#contacttextanimate').css('opacity', 0);
    $('#intouch').css('opacity', 0);
    $('#phoneanimate').css('opacity', 0);
    $('#emailanimate').css('opacity', 0);

    $('#intouch').waypoint(function() {
        $('#intouch').addClass('bounceIn slow');
        $('#contacttextanimate').addClass('bounceIn');
        $('#phoneanimate').addClass('fadeInLeft');
        $('#emailanimate').addClass('fadeInRight');
    }, { offset: '50%' });

});

// Add smooth scrolling to all links
$("a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){
        window.location.hash = hash;
        });
    }
});