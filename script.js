const samsungModels = {
  Phone: {
    'Galaxy S21': '$799',
    'Galaxy S20': '$699',
    'Galaxy Note 20': '$999',
    'Galaxy A71': '$499',
    'Galaxy Z Flip': '$1399'
  },
  Tablet: {
    'Galaxy Tab S7+': '$849',
    'Galaxy Tab S6 Lite': '$349',
    'Galaxy Tab A7': '$229',
    'Galaxy Tab S5e': '$399',
    'Galaxy Fold': '$1999'
  },
  Laptop: {
    'Galaxy Book Flex': '$1349',
    'Galaxy Book Ion': '$1199',
    'Galaxy Chromebook': '$999',
    'Galaxy Book S': '$999',
    'Galaxy Book Flex α': '$849'
  }
};

window.onload = function () {
  let $select1 = document.getElementById('select1'),
    $select2 = document.getElementById('select2'),
    $select3 = document.getElementById('select3');

  for (let y in samsungModels) {
    $select1.options[$select1.options.length] = new Option(y, y);
  }

  $select1.onchange = function () {
    $select2.length = 1;
    $select3.length = 1;

    for (let x in samsungModels[this.value]) {
      $select2.options[$select2.options.length] = new Option(x, x);
    }
  };

  $select2.onchange = function () {
    while ($select3.options.length > 0) {
      $select3.options.remove(0);
    }

    let device = samsungModels[$select1.value][this.value];
    let newDevice = new Option(device, device);
    $select3.add(newDevice);
  };
};
