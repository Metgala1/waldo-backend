function normalizeClick(clickX, clickY, displayW, displayH, naturalW, naturalH) {
  const rx = clickX / displayW;
  const ry = clickY / displayH;

  return {
    x: Math.round(rx * naturalW),
    y: Math.round(ry * naturalH),
  };
}

module.exports = { normalizeClick };
