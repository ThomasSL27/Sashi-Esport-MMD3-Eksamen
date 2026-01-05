// 
export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  return await $fetch(
    "https://open.faceit.com/data/v4/hubs/c035f6b3-d3f0-4313-820b-0f3588867e80",
    {
      headers: {
        Authorization: `Bearer ${config.faceitApiKey}`,
      },
    }
  )
})
