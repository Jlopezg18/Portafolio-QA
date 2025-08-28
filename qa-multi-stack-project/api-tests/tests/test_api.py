import requests
import pytest

BASE_URL = "https://jsonplaceholder.typicode.com"

def test_get_user_by_id():
    """Valida que un usuario puede ser consultado por su ID."""
    response = requests.get(f"{BASE_URL}/users/1")
    assert response.status_code == 200
    user_data = response.json()
    assert user_data['id'] == 1
    assert "Leanne Graham" in user_data['name']

def test_create_new_post():
    """Valida la creación de un nuevo post y su código de respuesta."""
    new_post_data = {
        "title": "qa automation",
        "body": "this is a test post",
        "userId": 1
    }
    response = requests.post(f"{BASE_URL}/posts", json=new_post_data)
    assert response.status_code == 201
    created_post = response.json()
    assert created_post['id'] is not None
    assert created_post['title'] == 'qa automation'

def test_api_bug_simulation():
    """Simula una prueba fallida para demostrar tu manejo de errores."""
    response = requests.get(f"{BASE_URL}/nonexistent-endpoint")
    assert response.status_code == 404