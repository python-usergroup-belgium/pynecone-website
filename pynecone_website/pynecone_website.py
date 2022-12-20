"""Main app."""
import pynecone as pc

from pynecone_website.index import State, index

app = pc.App(state=State)
app.add_page(index, title="Python UG BE")
app.compile()
