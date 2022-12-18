"""Script builds static website."""
import subprocess
from pathlib import Path

from pynecone import constants
from pynecone.utils import get_package_manager

from pynecone_website.pynecone_website import app

webpath = Path(__file__).parents[1] / ".web"

app.compile(force_compile=True)
subprocess.Popen(
    [get_package_manager(), "run", "export", "--prefix", str(webpath.resolve())],
    cwd=constants.WEB_DIR,
)
