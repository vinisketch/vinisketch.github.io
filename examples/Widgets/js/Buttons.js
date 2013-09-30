function initButtonsPanel () {
  var view = buildPanel ();
  view.scroll = vs.ui.ScrollView.VERTICAL_SCROLL
  
  var button = new vs.ui.Button ({
    position:[20, 10], text: "hello"
  }).init ();
  view.add (button);

  button = new vs.ui.Button ({
    position:[170, 10], text: "hello",
    style: vs.ui.Button.GREEN_STYLE
  }).init ();
  view.add (button);

  button = new vs.ui.Button ({
    position:[20, 70], text: "hello",
    style: vs.ui.Button.GREY_STYLE
  }).init ();
  view.add (button);

  button = new vs.ui.Button ({
    position:[170, 70], text: "hello",
    style: vs.ui.Button.RED_STYLE
  }).init ();
  view.add (button);

  button = new vs.ui.Button ({
    position:[20, 130], text: "hello",
    type: vs.ui.Button.NAVIGATION_TYPE
  }).init ();
  view.add (button);

  button = new vs.ui.Button ({
    position:[20, 170], text: "Back",
    type: vs.ui.Button.NAVIGATION_BACK_TYPE
  }).init ();
  view.add (button);

  button = new vs.ui.Button ({
    position:[20, 220], text: "Forward",
    type: vs.ui.Button.NAVIGATION_FORWARD_TYPE
  }).init ();
  view.add (button);

  button = new vs.ui.Button ({
    position:[120, 130], text: "hello",
    type: vs.ui.Button.NAVIGATION_TYPE,
    style: vs.ui.Button.BLACK_STYLE
  }).init ();
  view.add (button);

  button = new vs.ui.Button ({
    position:[120, 170], text: "Back",
    type: vs.ui.Button.NAVIGATION_BACK_TYPE,
    style: vs.ui.Button.BLACK_STYLE
  }).init ();
  view.add (button);

  button = new vs.ui.Button ({
    position:[120, 220], text: "Forward",
    type: vs.ui.Button.NAVIGATION_FORWARD_TYPE,
    style: vs.ui.Button.BLACK_STYLE
  }).init ();
  view.add (button);

  button = new vs.ui.Button ({
    position:[220, 130], text: "hello",
    type: vs.ui.Button.NAVIGATION_TYPE,
    style: vs.ui.Button.SILVER_STYLE
  }).init ();
  view.add (button);

  button = new vs.ui.Button ({
    position:[220, 170], text: "Back",
    type: vs.ui.Button.NAVIGATION_BACK_TYPE,
    style: vs.ui.Button.SILVER_STYLE
  }).init ();
  view.add (button);

  button = new vs.ui.Button ({
    position:[220, 220], text: "Forward",
    type: vs.ui.Button.NAVIGATION_FORWARD_TYPE,
    style: vs.ui.Button.SILVER_STYLE
  }).init ();
  view.add (button);
  
  button = new vs.ui.SegmentedButton ({
    position:[20, 260], size:[300, 42],
    isToggleButtons: false,
    items: ['item 1', 'item 2', 'item 3']
  }).init ();
  view.add (button);
  
  button = new vs.ui.SegmentedButton ({
    position:[350, 260], size:[300, 42],
    items: ['item 1', 'item 2', 'item 3'],
    selectedIndex : 0
  }).init ();
  view.add (button);
  
  button = new vs.ui.SegmentedButton ({
    position:[20, 310], size:[200, 28],
    isToggleButtons: false,
    type: vs.ui.SegmentedButton.BAR_TYPE,
    items: ['item 1', 'item 2', 'item 3']
  }).init ();
  view.add (button);
  
  button = new vs.ui.SegmentedButton ({
    position:[250, 310], size:[200, 28],
    type: vs.ui.SegmentedButton.BAR_TYPE,
    items: ['item 1', 'item 2', 'item 3'],
    selectedIndex : 0
  }).init ();
  view.add (button);
  
  button = new vs.ui.SegmentedButton ({
    position:[20, 360], size:[100, 130],
    items: ['item 1', 'item 2', 'item 3'],
    isToggleButtons: false,
    orientation: vs.ui.SegmentedButton.VERTICAL
  }).init ();
  view.add (button);

  button = new vs.ui.SegmentedButton ({
    position:[130, 360], size:[70, 80],
    items: ['item 1', 'item 2', 'item 3'],
    isToggleButtons: false,
    type: vs.ui.SegmentedButton.BAR_TYPE,
    orientation: vs.ui.SegmentedButton.VERTICAL
  }).init ();
  view.add (button);

  button = new vs.ui.SegmentedButton ({
    position:[250, 360], size:[100, 130],
    items: ['item 1', 'item 2', 'item 3'],
    selectedIndex : 0,
    orientation: vs.ui.SegmentedButton.VERTICAL
  }).init ();
  view.add (button);

  button = new vs.ui.SegmentedButton ({
    position:[360, 360], size:[70, 80],
    items: ['item 1', 'item 2', 'item 3'],
    selectedIndex : 0,
    type: vs.ui.SegmentedButton.BAR_TYPE,
    orientation: vs.ui.SegmentedButton.VERTICAL
  }).init ();
  view.add (button);

 return view;
}
