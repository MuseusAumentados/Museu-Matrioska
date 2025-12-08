export const navigationData = {
  local1: [
    { leadsTo: 'local2', position: [-7, -7, -2], rotation: [0, 4.7, 0] },
    { leadsTo: 'local5', position: [-1.5, -7, -5], rotation: [0, 3.1, 0] }
  ],
  local2: [
    { leadsTo: 'local1', position: [7, -7, -1], rotation: [0, -4.7, 0] },
    { leadsTo: 'local3', position: [-7, -7, -1], rotation: [0, 4.7, 0] }
  ],
  local3: [
    { leadsTo: 'local2', position: [4, -7, 0], rotation: [0, 1.7, 0] },
    { leadsTo: 'local4', position: [0, -7, -8], rotation: [0, 3, 0] }
  ],
  local4: [
    { leadsTo: 'local3', position: [0, -7, 5], rotation: [0, 0, 0] },
    { leadsTo: 'local6', position: [-6, -7, -1], rotation: [0, -1.5, 0] },
    { leadsTo: 'local13', position: [0, -7, -4], rotation: [0, -3.1, 0] },
    { leadsTo: 'local5', position: [8, -7, 0], rotation: [0, 1.6, 0] }
  ],
  local5: [
    { leadsTo: 'local1', position: [5, -7, -0], rotation: [0, 1.6, 0] },
    { leadsTo: 'local4', position: [0, -7, 10], rotation: [0, 0, 0] },
    { leadsTo: 'local16', position: [-10, -7, -0], rotation: [0, -1.6, 0] }
  ],
  local6: [
    { leadsTo: 'local7', position: [0, -7, 8], rotation: [0, 0, 0] },
    { leadsTo: 'local4', position: [0, -7, -5], rotation: [0, 3.14, 0] }
  ],
  local7: [
    { leadsTo: 'local32', position: [0, -7, 15], rotation: [-0.4, 0, 0] },
    { leadsTo: 'local10', position: [-6, -7, -0], rotation: [0, -1.5, 0] },
    { leadsTo: 'local6', position: [0, -7, -7], rotation: [0, 3.1, 0] }
  ],
  local8: [
    { leadsTo: 'local7', position: [0, -7, 5], rotation: [0, 3.14, 0] },
    { leadsTo: 'local9', position: [0, -2, -5], rotation: [0, 0, 0] }
  ],
  local9: [
    { leadsTo: 'local10', position: [-4, -7, 7], rotation: [0, 0, 0] },
    { leadsTo: 'local7', position: [-4, -7, -10], rotation: [0, 3, 0] },
    { leadsTo: 'local24', position: [4, -7, -5], rotation: [0, 1.5, 0] }
  ],
  local10: [
    { leadsTo: 'local9', position: [-5, -7, -4], rotation: [0, 3.14, 0] },
    { leadsTo: 'local11', position: [-10, -7, 8], rotation: [0, 0, 0] },
    { leadsTo: 'local7', position: [-12, -7, 5], rotation: [0, -2.4, 0] },
    { leadsTo: 'local22', position: [-2, -7, 7], rotation: [0, 0, 0] },
    { leadsTo: 'local24', position: [-10, -7, -8], rotation: [0, 3.14, 0] }
  ],
  local11: [
    { leadsTo: 'local10', position: [-4, -7, -4], rotation: [0, 3.14, 0] },
    { leadsTo: 'local13', position: [6, -7, 0], rotation: [0, 1.5, 0] }
  ],
  local12: [
    { leadsTo: 'local11', position: [0, -7, 5], rotation: [0, 3.14, 0] },
    { leadsTo: 'local13', position: [0, -7, -5], rotation: [0, 0, 0] }
  ],
  local13: [
    { leadsTo: 'local18', position: [-6, -7, 8], rotation: [0, -1.5, 0] },
    { leadsTo: 'local11', position: [8, -7, 0], rotation: [0, 1.5, 0] },
    { leadsTo: 'local14', position: [-6, -7, 0], rotation: [0, -1.5, 0] },
    { leadsTo: 'local4', position: [0, -7, -5], rotation: [0, 3, 0] },
    { leadsTo: 'local19', position: [0, -7, 8], rotation: [0, 0, 0] }
  ],
  local14: [
    { leadsTo: 'local13', position: [8, -7, 0], rotation: [0, 1.5, 0] },
    { leadsTo: 'local16', position: [-8, -7, 0], rotation: [0, -1.5, 0] }
  ],
  local15: [
    { leadsTo: 'local14', position: [0, -2, 5], rotation: [0, 3.14, 0] },
    { leadsTo: 'local16', position: [0, -2, -5], rotation: [0, 0, 0] }
  ],
  local16: [
    { leadsTo: 'local5', position: [8, -7, 0], rotation: [0, 1.5, 0] },
    { leadsTo: 'local17', position: [-7, -7, 1], rotation: [0, -1.5, 0] },
    { leadsTo: 'local4', position: [5, -7, 5], rotation: [0, 0.6, 0] },
    { leadsTo: 'local14', position: [-2, -7, 9], rotation: [0, 0, 0] }
  ],
  local17: [
    { leadsTo: 'local18', position: [-2, -7, 8], rotation: [0, 0, 0] },
    { leadsTo: 'local16', position: [7, -7, 1], rotation: [0, 1.5, 0] },
    { leadsTo: 'local14', position: [7, -7, 8], rotation: [0, 0, 0] }
  ],
  local18: [
    { leadsTo: 'local16', position: [6, -7, -3], rotation: [0, 2, 0] },
    { leadsTo: 'local19', position: [-5, -7, 4], rotation: [0, -1, 0] }
  ],
  local19: [
    { leadsTo: 'local13', position: [8, -7, 0], rotation: [0, 1.5, 0] },
    { leadsTo: 'local18', position: [3, -7, -8], rotation: [0, 3, 0] },
    { leadsTo: 'local20', position: [2, -7, 8], rotation: [0, 0, 0] }
  ],
  local20: [
    { leadsTo: 'local22', position: [2, -7, 5], rotation: [0, 0, 0] },
    { leadsTo: 'local19', position: [0, -7, -5], rotation: [0, -3, 0] }
  ],
  local21: [
    { leadsTo: 'local20', position: [0, -2, 5], rotation: [0, 3.14, 0] },
    { leadsTo: 'local22', position: [0, -2, -5], rotation: [0, 0, 0] }
  ],
  local22: [
    { leadsTo: 'local10', position: [4, -7, 5], rotation: [0, 0, 0] },
    { leadsTo: 'local4', position: [2, -7, -12], rotation: [0, 3, 0] },
    { leadsTo: 'local9', position: [4, -7, -7], rotation: [0, 1.5, 0] },
    { leadsTo: 'local20', position: [-5, -7, 3], rotation: [0, -1.5, 0] }
  ],
  local23: [
    { leadsTo: 'local22', position: [0, -2, 5], rotation: [0, 3.14, 0] },
    { leadsTo: 'local24', position: [0, -2, -5], rotation: [0, 0, 0] }
  ],
  local24: [
    { leadsTo: 'local25', position: [-4, -7, -5], rotation: [0, 3.14, 0] },
    { leadsTo: 'local9', position: [4, -7, -5], rotation: [0, 3, 0] }
  ],
  local25: [
    { leadsTo: 'local24', position: [4, -7, 7], rotation: [0, 1.5, 0] },
    { leadsTo: 'local26', position: [-1, -7, 7], rotation: [0, -1.5, 0] }
  ],
  local26: [
    { leadsTo: 'local30', position: [-2, -7, 8], rotation: [0, 0, 0] },
    { leadsTo: 'local25', position: [-5, -7, -5], rotation: [0, -1.5, 0] },
    { leadsTo: 'local24', position: [-1, -7, -8], rotation: [0, 3, 0] }
  ],
  local27: [
    { leadsTo: 'local26', position: [0, -7, 5], rotation: [0, 3.14, 0] },
    { leadsTo: 'local28', position: [0, -2, -5], rotation: [0, 0, 0] }
  ],
  local28: [
    { leadsTo: 'local27', position: [0, -2, 5], rotation: [0, 3.14, 0] },
    { leadsTo: 'local29', position: [0, -2, -5], rotation: [0, 0, 0] }
  ],
  local29: [
    { leadsTo: 'local28', position: [0, -7, 5], rotation: [0, 3.14, 0] },
    { leadsTo: 'local30', position: [0, -7, -5], rotation: [0, 0, 0] }
  ],
  local30: [
    { leadsTo: 'local32', position: [10, -7, 0], rotation: [0, 1.5, 0] },
    { leadsTo: 'local26', position: [8, -7, -5], rotation: [0, 3, 0] }
  ],
  local31: [
    { leadsTo: 'local30', position: [0, -7, 5], rotation: [0, 3.14, 0] },
    { leadsTo: 'local32', position: [0, -7, -5], rotation: [0, 0, 0] }
  ],
  local32: [
    { leadsTo: 'local34', position: [0, -7, 8], rotation: [0, 0, 0] },
    { leadsTo: 'local30', position: [2, -7, -10], rotation: [0, 3.15, 0] }
  ],
  local33: [
    { leadsTo: 'local32', position: [0, -7, 5], rotation: [0, 3.14, 0] },
    { leadsTo: 'local34', position: [0, -7, -5], rotation: [0, 0, 0] }
  ],
  local34: [
    { leadsTo: 'local33', position: [0, -2, 5], rotation: [0, 3.14, 0] }
  ],
};