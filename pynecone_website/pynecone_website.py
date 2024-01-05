"""Main app."""
import pynecone as pc

from pynecone_website.events import events
from pynecone_website.index import State, index

app = pc.App(state=State)
app.add_page(index, title="Python UG BE")
app.add_page(events, path="/events", title="Events")
app.compile()
