module.exports = class DirectionCounter{
  constructor(width = 0){
    this.directions = [
      {
        string: 'down n',
        count: 0,
        modifier: width,
      },
      {
        string: 'right n',
        count: 0,
        modifier: 1,
      },
      {
        string: 'left n',
        count: 0,
        modifier: -1,
      },
      {
        string: 'up n',
        count: 0,
        modifier: -width,
      },
      {
        string: 'down n right n',
        count: 0,
        modifier: width + 1,
      },
      {
        string: 'up n right n',
        count: 0,
        modifier: -width + 1,
      },
      {
        string: 'up n left n',
        count: 0,
        modifier: -width - 1,
      },
      {
        string: 'down n left n',
        count: 0,
        modifier: width + 1,
      },
    ];
  }
};