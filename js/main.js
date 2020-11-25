
// ******** covid-19 updates start ********
$.ajax({
    url : "https://api.covid19api.com/summary",
    type : "GET",
    dataType : "JSON",
    success : function(data){

      // console.log(data);
      // console.log(data.Global);
      // $.each(data.Global, function(key, value){
      //   // console.log(key + " : " + value);
      //   $("#covidtable").append("<tr><td>"+ key +"</td><td>"+ value +"</td></tr>")
      // });



      var sno = 1;
      $.each(data.Countries, function(key, value){
        $("#covid_table").append("<tr>"+
          "<td>"+ sno +"</td>"+
          "<td>"+ value.Country +"</td>"+
          "<td>"+ value.TotalConfirmed +"</td>"+
          "<td>"+ value.TotalRecovered +"</td>"+
          "<td>"+ value.TotalDeaths +"</td>"+
          "<td>"+ value.NewConfirmed +"</td>"+
          "<td>"+ value.NewRecovered +"</td>"+
          "<td>"+ value.NewDeaths +"</td>"+
          "</tr>");
          sno++;
      });
    }
  });
  // ******** covid-19 updates end ********



  // ******** back to top start ********
  
  // mybtn = document.getElementById("btp");
  // window.onscroll = function() {btpfunc()};
  // function btpfun() {
  //   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  //     mybtn.style.display = "block";
  //   }else {
  //     mybtn.style.display = "none";
  //   }
  // }

  function btpfunc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  // ******** back to top end ********



  // ******** waypoint start ********
    // var waypoint = new Waypoint({
    // element: document.getElementById('px-offset-waypoint'),
    // handler: function(direction) {
    //   notify('I am 20px from the top of the window')
    // },
    // offset: 20 
    //})
    
  // ******** waypoint start ********


    
  $(document).ready(function(){
    
    $('.about2').waypoint(function(direction){
       $('.about2').addClass('animate__animated animate__zoomIn')
    }, {
      offset: '50%'
    });


    $('.about3').waypoint(function(direction){
       $('.about3').addClass('animate__animated animate__bounceInRight')
    }, {
      offset: '50%'
    });


    $('.symp_animation').waypoint(function(direction){
      $('.symp_animation').addClass('animate__animated animate__zoomIn')
    }, {
      offset: '65%'
    });


    $('.against_1').waypoint(function(direction){
      $('.against_1').addClass('animate__animated animate__fadeInLeftBig')
    }, {
      offset: '70%'
    });


    $('.against_2').waypoint(function(direction){
      $('.against_2').addClass('animate__animated animate__zoomIn')
    }, {
      offset: '70%'
    });


    $('.against_3').waypoint(function(direction){
      $('.against_3').addClass('animate__animated animate__fadeInRightBig')
    }, {
      offset: '70%'
    });


    $('.against_4').waypoint(function(direction){
      $('.against_4').addClass('animate__animated animate__fadeInLeftBig')
    }, {
      offset: '80%'
    });


    $('.against_5').waypoint(function(direction){
      $('.against_5').addClass('animate__animated animate__zoomIn')
    }, {
      offset: '80%'
    });


    $('.against_6').waypoint(function(direction){
      $('.against_6').addClass('animate__animated animate__fadeInRightBig')
    }, {
      offset: '80%'
    });


    $('.contact_animation').waypoint(function(direction){
      $('.contact_animation').addClass('animate__animated animate__zoomIn animate__slow')
    }, {
      offset: '70%'
    });



    
  });
