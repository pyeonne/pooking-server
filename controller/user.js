import * as authRepository from '../data/auth.js';

export async function getUsers(req, res) {
  const data = await userRepository.getAll();
  res.status(200).json(data);
}

export async function getHotel(req, res) {
  const id = req.params.id;
  const hotel = await hotelRepository.getById(id);
  if (hotel) {
    res.status(200).json(hotel);
  } else {
    res.status(404).json({ message: `Hotel id(${id}) not found` });
  }
}

export async function createHotel(req, res) {
  const hotel = await hotelRepository.create(req.body);
  res.status(201).json(hotel);
}

export async function updateUser(req, res) {
  const id = req.params.id;
  const content = req.body;
  const user = await authRepository.findById(id);
  if (!user) {
    return res.sendStatus(404);
  }
  const updated = await authRepository.update(id, content);
  res.status(200).json(updated);
}

export async function deleteUser(req, res) {
  const id = req.params.id;
  const hotel = await hotelRepository.getById(id);
  if (!hotel) {
    return res.sendStatus(404);
  }
  await hotelRepository.remove(id);
  res.sendStatus(204);
}
