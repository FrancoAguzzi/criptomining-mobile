const metricsUrl = 'http://192.168.0.7:3333/gpu/monitor';

export const getMetrics = () => {
  try {
    return fetch(metricsUrl).then(res => res.json()).then(data => data)
  } catch (e) {
    return Promise.reject(e)
  }
}

export const getMonitorMetrics = (monitor) => {
  try {
    fetch(`${metricsUrl}/${monitor}`).then(res => {
      return res
    })    
  } catch (e) {
    return Promise.reject(e)
  }
}

export const getRigMetrics = (monitor, rig) => {
  try {
    fetch(`${metricsUrl}/rig/${rig}`).then(res => {
      return res
    })    
  } catch (e) {
    return Promise.reject(e)
  }
}

module.exports = {
  getMetrics,
  getMonitorMetrics,
  getRigMetrics
}
