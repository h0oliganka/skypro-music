export async function getTrack() {
  const trackResponse = (
    await fetch(`	https://painassasin.online/catalog/track/all/`)
  ).json()

  if (!trackResponse) {
    throw new Error('Ошибка сервера')
  }

  return trackResponse
}
