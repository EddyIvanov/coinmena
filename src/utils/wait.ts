/**
 * simulate api calls with a function to delay requests
 * */
export function wait(timeInMS: number): Promise<unknown> {
  return new Promise((resolve) => {
    setTimeout(resolve, timeInMS)
  })
}
