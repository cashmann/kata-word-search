module.exports = class DirectionCounter{
  constructor(width = 0){
    this.directions = [
      {
        string: 'down ',
        count: 0,
        modifier: width,
        xMod: 0,
        yMod: 1,
      },
      {
        string: 'right ',
        count: 0,
        modifier: 1,
        xMod: 1,
        yMod: 0,
      },
      {
        string: 'left ',
        count: 0,
        modifier: -1,
        xMod: -1,
        yMod: 0,
      },
      {
        string: 'up ',
        count: 0,
        modifier: -width,
        xMod: 0,
        yMod: -1,
      },
      {
        string: 'down right',
        count: 0,
        modifier: width + 1,
        xMod: 1,
        yMod: 1,
      },
      {
        string: 'up right',
        count: 0,
        modifier: -width + 1,
        xMod: 1,
        yMod: -1,
      },
      {
        string: 'up left',
        count: 0,
        modifier: -width - 1,
        xMod: -1,
        yMod: -1,
      },
      {
        string: 'down left',
        count: 0,
        modifier: width - 1,
        xMod: -1,
        yMod: 1,
      },
    ];
  }
};

