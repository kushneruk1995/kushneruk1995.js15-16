function googleSearch() {
  var request = $('.sought').val();
  var demand = $.ajax({
    url: "https://pixabay.com/api/?username=kushneruk_1995&key=3614464-520c9209e664f683faff11ff5&q=" + request + "&image_type=photo",
    success: function(data) {
      function GoogleCallback(data) {
        $('#container').empty();
        $.each(data.hits, function(i,hits) {
          $("#container").prepend("<div class='item' style='width:" + hits.webformatWidth + "px; height:" + hits.webformatHeight + "px; background: url(" + hits.webformatURL + ");'><a href='" + hits.pageURL + "' class='link' target='_blank'><div class='overlay'><div class='overlay-user'><p>by "+ hits.user +"</p></div><div class='overlay-likes'><img src='img/like.png' class='overlay-like__img'><p>"+ hits.likes +"</p></div></div></a></div>");
          if ( i == 20 ) return false;
        });

        $('.item').hover(function() {
          $(this).find('.overlay') .css('opacity', '1');
          }, function() {
          $(this).find('.overlay') .css('opacity', '0');
        })

        if($(".container").masonry().length > -1) {
          $(".container").masonry("destroy");
        }

        $("#container").masonry({
          itemSelector: '.item',
          isFitWidth: true,
        });   
      }

      GoogleCallback(data);
    }
  });
}

/*---------TASK 2 ---------------*/

function Human(name, age) {
  this.name = 'Vasya';
  this.age = '20';
  this.height = '140';
  this.male = 'male';
  this.weight = '65';
}
var newHuman = new Human();

function Worker() {
  var task = 0;
  this.placeWork = 'office';
  this.salary = '2000';
  this.work = function() {
    task++;
    alert("Виконано " + task + " завдань");
  };
}

function Student() {
  var serial = 0;
  this.placeStudy = 'KPI';
  this.grants = '700';
  sthis.watchSerial = function() {
    serial++;
    alert("переглянуто " + serial + " серіали");
  };
}

Worker.prototype = newHuman;
Student.prototype = newHuman;

var Worker1 = new Worker();
var Worker2 = new Worker();

var Student1 = new Student();
var Student2 = new Student();

console.log('Worker1', Worker1);
console.log('Worker2', Worker2);
console.log('Student1', Student1);
console.log('Student2', Student2);
console.log('Student1 age = ', Student1.age);
console.log('Worker1 male = ', Worker1.male);

Worker1.work();
Worker1.work();
Worker1.work();

Student1.watchSerial();
Student1.watchSerial();
Student1.watchSerial();